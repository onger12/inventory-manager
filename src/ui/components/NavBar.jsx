

import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inventory Manager
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/ventas"
                    >
                        Ventas
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/inventario"
                    >
                        Inventario
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/clientes"
                    >
                        Clientes
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/registros"
                    >
                        Registros
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}