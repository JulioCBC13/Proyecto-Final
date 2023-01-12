import React, { Component } from "react";
import "../../styles/login.css";

export const Login = () => {
  return (
    <div className="bodyL">
      <div className="container-form sign-in">
        <div className="welcome-back">
          <div className="message">
            <h2>¡Bienvenido al exito!</h2>
            <p>
              ¡Si ya tienes cuenta por favor inicia sesión, si no registrate
              ya haciendo click aquí!
            </p>
            <div className="sign-up-btn">
              <a href="registro"><input type="button" value="Registrate"/></a>
            </div>
          </div>
        </div>
        <form className="formulario">
          <h2 className="Log-in">Iniciar sesión</h2>
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
          <p className="Chapter">¡Adelante!</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="button" value="Iniciar sesión" />
        </form>
      </div>
    </div>
  );
};
