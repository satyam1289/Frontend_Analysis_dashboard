type Props = {
  data: any[];
  onDrillDown: (brand: string) => void;
};

export function TopCompanies({ data, onDrillDown }: Props) {
  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 py-2">
      {data.slice(0, 10).map((item, idx) => {
        const percentage = Math.max(10, (item.count / data[0].count) * 100);
        const hue = 210 + (idx * 12);

        return (
          <button 
            key={idx} 
            onClick={() => onDrillDown(item.name)}
            className="flex flex-col gap-2 group text-left w-full hover:scale-[1.02] transition-transform p-3 rounded-2xl hover:bg-slate-50/50 hover:shadow-lg border border-transparent hover:border-slate-100/50 relative overflow-hidden"
          >
            <div className="flex justify-between items-center text-sm z-10 relative">
              <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{item.name}</span>
              <span className="text-slate-700 font-black bg-white shadow-sm border border-slate-100 px-3 py-1 rounded-full text-xs">
                {item.count} <span className="text-[9px] font-black opacity-50 ml-1">MENTIONS</span>
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner z-10 relative">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${percentage}%`,
                  background: `linear-gradient(90deg, hsl(${hue}, 80%, 60%), hsl(${hue}, 90%, 45%))`
                }}
              ></div>
            </div>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 z-0"
              style={{ background: `linear-gradient(90deg, hsl(${hue}, 80%, 60%), transparent)` }}
            ></div>
          </button>
        );
      })}
    </div>
  );
}
