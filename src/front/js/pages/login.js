import "../../styles/registro.css";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../img/Login title.png";
import "../../img/login.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  // console.log("Tu token ok", store.token);

  function login() {
    actions.loginFlux(email, password);
    navigate("/services");
  }

  useEffect(() => {
    if (store.token && store.token != "") navigate("/");
  }, [store.token]);

  return (
    <div className="registro text-center d-flex">
      <br />
      <br />
      <br />
      <div className="form-signin w-100 m-auto">
        <div className="contenedor2 bg-dark">
          {/* Texto de saludo */}
          <div className=" p-1 border-bottom border-secondary" id="Registrate">
            <h1 className="h3 mb-1 fw-normal text-center fw-bolder">
              Inicia sesión aquí
            </h1>
            <p className="h5 mb-1 fw-bolder">¡Adelante!</p>
          </div>

          <div className="text-center mt-2">
            {/* Email y Contrasena */}

            <div className="input mb-3" id="#EmailContraseña ">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Contraseña"
              />
            </div>
            <button
              className="btnCrear w-100 btn btn-lg btn active"
              type="button"
              id="boton"
              onClick={login}
            >
              Entrar
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="welcome-back">
        <div className="message">
          <h2 className="fw-bolder">
            ¡Bienvenido al éxito!
            <br />
            <br />
            Si no tienes cuenta con nosotros, por favor regístrate ya haciendo
            click en:
          </h2>
          <div className="sign-up-btn">
            <a href="registro">
              <input className="fw-bolder" type="button" value="Regístrate" />
            </a>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
