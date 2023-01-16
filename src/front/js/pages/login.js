import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
//import "../../img/Login title.png";
//import "../../img/login.jpg";
import loginT from "../../img/Login title.png";
import sesion from "../../img/login.jpg";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  // console.log("Tu token ok", store.token);

  function login() {
    actions.loginFlux({      
      email: email,
      password: password,      
    });
  }

  useEffect(() => {
    if (store.token && store.token != "") navigate("/");
  }, [store.token]);

  return (
    <div className="registro text-center d-flex">
      <div className="title-page d-flex justify-content-around align-items-center">
        <img src="contaplus.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src={loginT} alt="Servicios" />
      </div>
      <div className="descripcion">
        <img src={sesion} width="450" height="250" alt="img" />
        <div className="texto1">
          <h4>
            Inicia tu futuro ahora
          </h4>
        </div>
      </div>
      <br />
      <br />
      <div className="form-signin w-100 m-auto">
        <div className="contenedor bg-dark">
          {/* Texto de saludo */}
          <div className=" p-1 border-bottom border-secondary" id="iniciaSesion">
            <h1 className="h3 mb-1 fw-normal text-center fw-bolder">
              Inicia sesión con tu cuenta
            </h1>
            <p className="h5 mb-1 fw-bolder">¡Adelante!</p>
          </div>

          <div className="text-center mt-2">
            <div className="icons">
              <div className="border-icon">
                <i className="fa-brands fa-google"></i>
              </div>
              <div className="border-icon">
                <i className="fa-brands fa-square-instagram"></i>
              </div>
              <div className="border-icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
            {/* Email y Contrasena */}
            <div className="input mb-3" id="#EmailContraseña ">
              <input
                type="text"
                placeholder="Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"                
              />
              <input                
                type="text"
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Contraseña"
              />
            </div>

            <div className="checkbox mb-3 text-light">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn active"
              type="submit"
              id="boton"
              onClick={login}>
              Iniciar sesión
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
