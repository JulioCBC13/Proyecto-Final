import React from "react";
import "./registro.css";

export const Registro = () => {
  return (
    <div className="text-center d-flex" id="registro">
      <div class="form-signin w-100 m-auto">
        <div className="contenedor bg-dark">
          <div className="text-center ">
            <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>

            <div class="form-floating" id="email">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating" id="password">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
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
