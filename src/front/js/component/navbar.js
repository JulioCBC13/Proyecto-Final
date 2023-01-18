import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "/workspace/Proyecto-Final/src/front/js/component/navbar.css";
import "../../img/logo navbar.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg ">
      <div className="container-fluid">
        <img src="logo navbar.png" width="50" height="40" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            {!store.token && (
              <li className="nav-item">
                <Link className="nav-link active" to="registro">
                  Registro
                </Link>
              </li>
            )}
            {!store.token && (
              <li className="nav-item">
                <Link className="nav-link active" to="login">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item active dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="services"
                role="button"
                data-bs-toggle="dropdown"
              >
                Servicios
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item text-white" to="balance">
                    Balances Personales
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="ingresos">
                    Certificaciones de Ingreso
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="impuestos">
                    Declaraciones de Impuestos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="asesoria">
                    Asesoría Personalizada
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Ingrese su texto aquí"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
