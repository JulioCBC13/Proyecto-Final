import React from "react";
import "./registro.css";

export const Registro = () => {
  return (
    <div className="text-center d-flex" id="registro">
      <div class="form-signin w-100 m-auto">
        <div className="contenedor bg-dark">
          <div className="text-center ">
            <h1 class="h3 mb-3 fw-normal text-center">Registrate</h1>
            <p>Es rapido y facil</p>

            <div class="input-group mb-3" id="#NombreApellido ">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Nombre"
              />
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Nombre"
              />
            </div>
            <div class="form-floating" id="password">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Apellido"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
