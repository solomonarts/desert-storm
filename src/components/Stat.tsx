interface StatProps {
  label: string;
  value: string;
}

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <p className="text-xs text-slate-300">{label}</p>
      <p className="text-xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
