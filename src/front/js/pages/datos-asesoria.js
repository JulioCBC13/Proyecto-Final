import React from "react";
import "../../img/Asesoria datos.png";
import "../../img/asesoria.jpg";

export const AsesoriaDatos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Asesoria datos.png" alt="Servicios" />
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
        <h1>Datos de la cita solicitada:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Fecha de la cita:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Hora de la cita:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Motivo de la cita:</h5></label>
        <br/><br/>
      </div>
    </div>
  );
};
