import React from "react";
import "../../img/Balance datos.png";
import "../../img/balance.jpg";

export const BalanceDatos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance datos.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="balance.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
          Los balances personales son documentos contables que muestran información
            acerca de la situación financiera particular del solicitante, que incluye
            detalles debidamente ordenados acerca de los activos, pasivos y patrimonios
            que se poseen en un momento determinado.
          </h4>
        </div>
      </div>
      <br/><br/>
      <div className="valores">
      <div>
        <h1>Datos del Balance Personal solicitado:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Nombre completo:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cédula de identidad:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Información bancaria:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cantidad de vehículos que posee:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cantidad de propiedades que posee:</h5></label>
        <br/><br/>
      </div>
    </div>
  );
};
