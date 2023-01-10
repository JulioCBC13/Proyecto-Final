import React from "react";

import "../../img/Ingresos title.png";
import "../../img/ingresos.jpg";

export const Ingresos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="390" height="350" alt="Contaplus" />
        <br />
        <img src="Ingresos title.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="ingresos.jpg" width="450" height="250" alt="images" />
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
            <h1>Solicite una Certificación de Ingresos a continuación:</h1>
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
            <br/><br/>
      </div>
    </div>
  );
};
