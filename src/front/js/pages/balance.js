import React from "react";

import "../../img/Balance title.png";
import "../../img/balance.jpg";

export const Balance = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance title.png" alt="Servicios" />
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
            <h1>Solicite un Balance Personal a continuación:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Ingrese su nombre completo:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su número de cédula de identidad:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su información bancaria:</h5></label>
        <br/>
        <input type="file"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese la cantidad de vehículos que posee:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese la cantidad de propiedades que posee:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <button type="submit" className="btn btn-success">
              Enviar solicitud
            </button>
            <br/><br/>
      </div>
    </div>
  );
};
