import React from "react";
import "./registro.css";

export const Registro = () => {
  return (
    <div className="text-center d-flex" id="registro">
      <div class="form-signin w-100 m-auto">
        <div className="contenedor bg-dark">
          {/* Texto de saludo */}
          <div class=" p-1 border-bottom border-secondary" id="Registrate">
            <h1 class="h3 mb-1 fw-normal text-center">Registrate</h1>
            <p className="mb-1">Es rapido y facil</p>
          </div>

          <div className="text-center mt-2">
            {/* Nombre y apellido */}
            <div class="input-group mb-3" id="#NombreApellido ">
              <input
                type="text"
                class="form-control me-1 rounded"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Nombres"
              />
              <input
                type="text"
                class="form-control rounded"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Apellidos"
              />
            </div>

            {/* Email y Contrasena */}

            <div class="input mb-3" id="#EmailContraseña ">
              <input
                type="text"
                class="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email"
              />
              <input
                type="text"
                class="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Contraseña"
              />
              <input
                type="text"
                class="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="C.I"
              />
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn active" type="submit" id="boton">
              Crear Cuenta
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
