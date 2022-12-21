import React, { Component } from "react";
import "./login.css";
import "./signin.js";

export const Login = () => {
  return (
    <div className="bodyL">
      <div className="container-form sign-up">
        <div className="welcome-back">
          <div className="message">
            <h2>Bienvenido a mi</h2>
            <p>Si ya tienes cuenta por favor inicia sesion aqui</p>
            <button className="sign-up-btn">Iniciar Sesion</button>
          </div>
        </div>
        <form className="formulario">
          <h2 className="create-account">Crear una cuenta</h2>
          <div className="icons">
            <div className="border-icon">
              <i className="bx bxl-google"></i>
            </div>
            <div className="border-icon">
              <i className="bx bxl-instagram"></i>
            </div>
            <div className="border-icon">
              <i className="bx bxl-facebook-circle"></i>
            </div>
          </div>
          <p className="cuenta-gratis"> Crear una cuenta cuenta gratis</p>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="button" value="Registrarse" />
        </form>
      </div>
      <div className="container-form sign-in">
        <form className="formulario">
          <h2 className="create-account">Iniciar sesion</h2>
          <div className="icons">
            <div className="border-icon">
              <i className="bx bxl-google"></i>
            </div>
            <div className="border-icon">
              <i className="bx bxl-instagram"></i>
            </div>
            <div className="border-icon">
              <i className="bx bxl-facebook-circle"></i>
            </div>
          </div>
          <p className="cuenta-gratis">¿Aun no tienes cuenta?</p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="button" value="Iniciar Sesion" />
        </form>
        <div className="welcome-back">
          <div className="message">
            <h2>Bienvenido de nuevo</h2>
            <p>Si aun no tienes cuenta por favor registrese aqui</p>
            <button className="sign-in-btn">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};
