export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 bg-slate-50 border-l-4 border-slate-900 hover:border-amber-500 transition-all duration-300 group">
      <div className="w-8 h-1 bg-amber-500 mb-6 group-hover:w-16 transition-all duration-300"></div>
      <h2 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight group-hover:text-amber-600 transition-colors">
        {title}
      </h2>
      <p className="text-slate-600 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
