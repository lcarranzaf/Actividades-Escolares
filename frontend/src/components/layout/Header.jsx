import { NavLink } from 'react-router-dom'

export default function HeaderNavbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 font-medium transition-colors duration-200 ${
      isActive
        ? "text-white bg-blue-700 rounded"
        : "text-white hover:text-blue-300"
    }`;

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h1 className="text-2xl font-bold m-0">
              Gestión de Actividades Escolares
            </h1>
          </div>
          
          {/* Navegación */}
          <nav>
            <ul className="flex space-x-4 py-3">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/registro" className={navLinkClass}>
                  Registrar Actividad
                </NavLink>
              </li>
              <li>
                <NavLink to="/lista" className={navLinkClass}>
                  Lista de Actividades
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}