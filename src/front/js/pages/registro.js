import React from "react";
import "./registro.css";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cedula, setCedula] = useState("");

  function registrarUsuario() {
    actions.registrarUsuarioFlux({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      cedula: cedula,
    });
  }

  return (
    <div className="text-center d-flex" id="registro">
      <div className="form-signin w-100 m-auto">
        <div className="contenedor bg-dark">
          {/* Texto de saludo */}
          <div className=" p-1 border-bottom border-secondary" id="Registrate">
            <h1 className="h3 mb-1 fw-normal text-center">Registrate</h1>
            <p className="mb-1">Es rapido y facil</p>
          </div>

          <div className="text-center mt-2">
            {/* Nombre y apellido */}
            <div className="input-group mb-3" id="#NombreApellido ">
              <input
                onChange={(evento) => setName(evento.target.value)}
                value={name}
                type="text"
                className="form-control me-1 rounded"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Nombres"
              />
              <input
                onChange={(evento) => setLastname(evento.target.value)}
                value={lastname}
                type="text"
                className="form-control rounded"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Apellidos"
              />
            </div>

            {/* Email y Contrasena */}

            <div className="input mb-3" id="#EmailContraseña ">
              <input
                type="text"
                onChange={(evento) => setEmail(evento.target.value)}
                value={email}
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email"
              />
              <input
                onChange={(evento) => setPassword(evento.target.value)}
                value={password}
                type="text"
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Contraseña"
              />
              <input
                onChange={(evento) => setCedula(evento.target.value)}
                value={cedula}
                type="text"
                className="form-control mb-1"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="C.I"
              />
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn active"
              type="submit"
              id="boton"
              onClick={registrarUsuario}
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
