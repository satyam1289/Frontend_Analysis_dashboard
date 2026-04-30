import ReactWordcloud from "react-wordcloud";

interface WordCloudProps {
  data: any[];
  message?: string;
}

const options: any = {
  colors: ["#1e1b4b", "#991b1b", "#64748b", "#94a3b8", "#78716c", "#b91c1c", "#334155"],
  enableTooltip: true,
  deterministic: true,
  fontFamily: "Impact, 'Arial Narrow Bold', sans-serif",
  fontSizes: [12, 120],
  fontStyle: "normal",
  fontWeight: "900",
  padding: 1,
  rotations: 2,
  rotationAngles: [-90, 0],
  scale: "sqrt",
  spiral: "rectangular",
  transitionDuration: 1000
};

export function WordCloud({ data, message }: WordCloudProps) {
  if (message) return <div className="p-8 text-center text-slate-400 italic text-sm">{message}</div>;
  if (!data || data.length === 0) return null;

  const words = data.map(item => ({ text: item.word, value: item.weight }));

  return (
    <div className="h-[400px] w-full p-2 cursor-pointer hover:opacity-90 transition-opacity">
      <ReactWordcloud words={words} options={options} />
    </div>
  );
}
