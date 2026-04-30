import { Bar, BarChart, ResponsiveContainer, Cell, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS: Record<string, string> = {
  positive: "url(#colorPositive)", 
  neutral: "url(#colorNeutral)", 
  negative: "url(#colorNegative)"
};

const DOT_COLORS: Record<string, string> = {
  positive: "#10b981", 
  neutral: "#94a3b8", 
  negative: "#ef4444"
};

type Props = {
  donut: any[];
  onDrillDown: (label: string) => void;
};

export function SentimentOverview({ donut, onDrillDown }: Props) {
  if (!donut || donut.length === 0) return null;

  const data = donut.map(d => ({
    name: d.label.charAt(0).toUpperCase() + d.label.slice(1),
    rawValue: d.label,
    value: d.count,
    color: COLORS[d.label.toLowerCase()] ?? "#cbd5e1",
    dotColor: DOT_COLORS[d.label.toLowerCase()] ?? "#cbd5e1"
  }));

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="h-[300px] w-full flex flex-col items-center">
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity={1}/>
              <stop offset="100%" stopColor="#059669" stopOpacity={1}/>
            </linearGradient>
            <linearGradient id="colorNeutral" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" stopOpacity={1}/>
              <stop offset="100%" stopColor="#475569" stopOpacity={1}/>
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb7185" stopOpacity={1}/>
              <stop offset="100%" stopColor="#e11d48" stopOpacity={1}/>
            </linearGradient>
            <filter id="shadow" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.15"/>
            </filter>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                const percent = total > 0 ? ((item.value / total) * 100).toFixed(0) : 0;
                return (
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                    <span className="w-4 h-4 rounded-full shadow-inner" style={{ background: item.dotColor }}></span>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-black text-sm">{item.name}</span>
                      <span className="text-slate-500 text-xs font-semibold">{percent}% of Total</span>
                    </div>
                    <span className="text-blue-600 font-black text-xl ml-2">{item.value}</span>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="value" 
            radius={[8, 8, 0, 0]} 
            barSize={45}
            animationDuration={1500}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={(data) => onDrillDown(data.payload.rawValue)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} filter="url(#shadow)" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-8 mt-4 pt-4 border-t border-slate-100 w-full justify-center">
        {data.map((d, i) => (
          <button 
            key={i} 
            onClick={() => onDrillDown(d.rawValue)}
            className="flex items-center gap-3 group transition-all hover:scale-105 bg-slate-50/50 px-4 py-2 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100"
          >
            <div className="w-2.5 h-2.5 rounded-full shadow-inner" style={{ backgroundColor: d.dotColor }}></div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-800 transition-colors uppercase tracking-widest">{d.name}</span>
            <span className="text-sm font-black text-slate-900">{d.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
