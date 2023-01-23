import React from "react";

import "../../img/Impuestos title.png";
import "../../img/impuestos.png";

export const Impuestos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Impuestos title.png" alt="Servicios" />
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
            <h1>Solicite una Declaración de Impuestos a continuación:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Ingrese su nombre completo:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su número de cédula de identidad:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Indique sus ingresos:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Indique sus costos:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Indique sus gastos:</h5></label>
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
