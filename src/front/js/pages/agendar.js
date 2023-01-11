import React from "react";

import "../../img/Agendar title.png";
import "../../img/agendar.png";

export const Agendar = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="390" height="350" alt="Contaplus" />
        <br />
        <img src="Agendar title.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="agendar.png" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Somos una empresa que busca dar respuesta oportuna a las necesidades
            de nuestros clientes en el área contable, a través de la prestación
            de servicios que le ahorran tiempo y dinero que resultan ser
            elementos muy valiosos para ellos en su día a día.
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
        <input type="date"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Haga click en el reloj y seleccione la hora de la cita:</h5></label>
        <br/>
        <input type="time"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Explique el motivo de la cita:</h5></label>
        <br/>
        <textarea name="textarea" rows="5" cols="50"/>
        <br/><br/>
        <button type="submit" className="btn btn-success">
              Enviar solicitud
            </button>
            <br/><br/>
      </div>
    </div>
  );
};
