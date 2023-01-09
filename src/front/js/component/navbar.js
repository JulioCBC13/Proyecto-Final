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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Registro
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul class="dropdown-menu  bg-dark">
                <li>
                  <a class="dropdown-item text-white" href="#">
                    Balances Personales
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#">
                    Certificaciones de Ingreso
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#">
                    Declaraciones de Impuestos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#">
                    Asesoría Financiera
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider "></hr>
                </li>
                <li>
                  <a class="dropdown-item text-white" href="#">
                    Agendar una cita
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Ingrese su texto aquí"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
          <div class="d-flex">         
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">            
              <li class="nav-item">
                <a class="nav-link" href="#">                
                  Contacto                 
                  <i class="fa-regular fa-envelope"></i>                        
                </a>                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
