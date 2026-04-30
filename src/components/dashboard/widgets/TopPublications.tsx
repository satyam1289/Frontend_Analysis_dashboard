import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts";

type Props = {
  data: any[];
  onDrillDown: (publication: string) => void;
};

export function TopPublications({ data, onDrillDown }: Props) {
  if (!data || data.length === 0) return null;

  const chartData = data.slice(0, 10).map((item, idx) => ({
    name: item.publisher,
    count: item.article_count,
    color: `url(#colorPub-${idx})`,
    stop1: `hsl(${210 + (idx * 12)}, 80%, 60%)`,
    stop2: `hsl(${210 + (idx * 12)}, 90%, 45%)`
  }));

  return (
    <div className="h-[350px] w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={chartData} 
          layout="vertical" 
          margin={{ left: 20, right: 30 }}
        >
          <defs>
            {chartData.map((entry, index) => (
              <linearGradient key={`grad-${index}`} id={`colorPub-${index}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={entry.stop1} stopOpacity={1}/>
                <stop offset="100%" stopColor={entry.stop2} stopOpacity={1}/>
              </linearGradient>
            ))}
            <filter id="shadowPub" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
            </filter>
          </defs>
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fill: "#475569", fontSize: 11, fontWeight: 700 }} 
            width={120}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(59, 130, 246, 0.05)', radius: 8 }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-in fade-in slide-in-from-top-1 flex items-center gap-4">
                    <div className="w-2 h-full min-h-[30px] rounded-full" style={{ background: payload[0].payload.stop2 }}></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
                      <p className="text-slate-900 font-bold text-lg leading-none">
                        {payload[0].value} <span className="font-medium text-slate-500 text-xs">Mentions</span>
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar 
            dataKey="count" 
            radius={[0, 8, 8, 0]} 
            barSize={16}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={(data) => onDrillDown(data.name)}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} filter="url(#shadowPub)" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
