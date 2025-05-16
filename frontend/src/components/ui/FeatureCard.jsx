import { Link } from "react-router-dom";

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  linkTo, 
  linkText, 
  colorClass 
}) {
  return (
    <div className={`rounded-lg shadow-md flex flex-col items-center p-8 ${colorClass}`}>
      {icon}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-center mb-6 text-gray-300">
        {description}
      </p>
      <Link 
        to={linkTo} 
        className="bg-white font-medium py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
        style={{ color: colorClass.includes('blue') ? '#2563eb' : '#7c3aed' }}
      >
        {linkText}
      </Link>
    </div>
  );
}