import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../img/Asesoria title.png";
import "../../img/asesoria.jpg";

export const Asesoria = () => {
  const { store, actions } = useContext(Context);

  const [fecha,setFecha] = useState("");
  const [hora,setHora] = useState("");
  const [motivo,setMotivo] = useState("");

  const agendarCita = ()=> {
    actions.nuevoBalance({completeName: fecha, cedula: hora, bancoInfo: motivo});
  }

  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Asesoria title.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="asesoria.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
          Si desea recibir asesoría personalizada en el área financiera o desea
            despejar dudas en cualquier otra área, puede agendar una cita virtual
            con nuestro personal, quien le atenderá gustosamente, poniendo a su disposición
            todo nuestro apoyo para ayudarle a solventar sus necesidades
            en el menor tiempo posible y sin tener que dirigirse a ningún sitio.
          </h4>
        </div>
      </div>
      <br/><br/>
      <div className="valores">
      <div>
            <h1>Agende una cita a continuación:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Haga click en el calendario y seleccione la fecha de la cita:</h5></label>
        <br/>
        <input value={fecha} onChange={(e)=> setFecha(e.target.value)} type="date"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Haga click en el reloj y seleccione la hora de la cita:</h5></label>
        <br/>
        <input value={hora} onChange={(e)=> setHora(e.target.value)} type="time"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Explique el motivo de la cita:</h5></label>
        <br/>
        <textarea value={motivo} onChange={(e)=> setMotivo(e.target.value)} name="textarea" rows="5" cols="50"/>
        <br/><br/>
        <button onClick={agendarCita} type="submit" className="btn btn-success">
              Enviar solicitud
            </button>
            <br/><br/>
      </div>
    </div>
  );
};
