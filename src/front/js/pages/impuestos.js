import React from "react";

import "../../img/Impuestos title.png";
import "../../img/impuestos.png";

export const Impuestos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="350" height="350" alt="Contaplus" />
        <br />
        <img src="Impuestos title.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="impuestos.png" width="450" height="250" alt="images" />
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
            <h1>Solicite una Declaración de Impuestos a continuación:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Ingrese requisito 1:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese requisito 2:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese requisito 3:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <button type="submit" className="btn btn-success">
              Enviar solicitud
            </button>
      </div>
    </div>
  );
};
