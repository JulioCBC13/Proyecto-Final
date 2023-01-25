import React from "react";
import "../../img/Impuestos datos.png";
import "../../img/impuestos.png";

export const ImpuestosDatos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Impuestos datos.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="impuestos.png" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
          Las declaraciones de impuestos son documentos que se presentan ante los
            organimos de recaudación gubernamentales. Éstos deben reflejar la cantidad de
            ingresos obtenidos durante el último año, de modo que en base a ellos se 
            calcule la cantidad de tributos a cancelar por el contribuyente.
          </h4>
        </div>
      </div>
      <br/><br/>
      <div className="valores">
      <div>
        <h1>Datos de la Declaración de Impuestos solicitada:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Nombre completo:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cédula de identidad:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingresos:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Costos:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Gastos:</h5></label>
        <br/><br/>
      </div>
    </div>
  );
};
