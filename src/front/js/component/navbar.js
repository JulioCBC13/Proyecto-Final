import React from "react";
import { Link } from "react-router-dom";
import "/workspace/Proyecto-Final/src/front/js/component/navbar.css";
import "../../img/logo navbar.png";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="logo navbar.png" width="50" height="40" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="registro">
                Registro
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="login">
                Login
              </Link>
            </li>
            <li class="nav-item active dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="services"
                role="button"
                data-bs-toggle="dropdown"
              >
                Servicios
              </Link>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link class="dropdown-item text-white" to="balance">
                    Balances Personales
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item text-white" to="ingresos">
                    Certificaciones de Ingreso
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item text-white" to="impuestos">
                    Declaraciones de Impuestos
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item text-white" to="asesoria">
                    Asesor??a Personalizada
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Ingrese su texto aqu??"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
          </div>
      </div>
    </nav>
  );
};