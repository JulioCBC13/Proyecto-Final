import React from "react";

import "../../img/Ingresos title.png";
import "../../img/ingresos.jpg";

export const Ingresos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Ingresos title.png" alt="Servicios" />
      </div>      
      <div className="descripcion">
        <img src="ingresos.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
          Una certificación de ingresos es un documento que se emite para avalar y
            dar legitimidad a los ingresos del solicitante en un tiempo determinado.
            Para emitirlo se debe realizar una verificación de estados de cuenta bancarios, 
            recibos de nómina o facturas de ventas que permitan corroborar que dichos
            ingresos son exactos y provienen de actividades lícitas.
          </h4>
        </div>
      </div>
      <br/><br/>
      <div className="valores">
      <div>
            <h1>Solicite una Certificación de Ingresos a continuación:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Ingrese su nombre completo:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su número de cédula de identidad:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su ingreso promedio mensual:</h5></label>
        <br/>
        <input type="text"/>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingrese su profesión u ocupación:</h5></label>
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
