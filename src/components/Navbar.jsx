import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you import Bootstrap styles

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todo App
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/localstorage">
                Todo List (LocalStorage)
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/database">
                Todo List (Database)
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
