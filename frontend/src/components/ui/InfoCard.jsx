export default function InfoCard({ title, color, description }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 shadow-sm">
      <div className={`font-bold text-lg mb-2 ${color}`}>{title}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}