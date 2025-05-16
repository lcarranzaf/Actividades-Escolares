export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Sistema de Gestión de Actividades Escolares</p>
        <p className="text-sm mt-2 text-gray-400">
          Desarrollado con React, Vite y Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
