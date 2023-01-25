import React from "react";
import "../../img/Ingresos datos.png";
import "../../img/ingresos.jpg";

export const IngresosDatos = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Ingresos datos.png" alt="Servicios" />
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
        <h1>Datos de la Certificación de Ingresos solicitada:</h1>
        </div>
        <label for="formFile" className="form-label"><h5>Nombre completo:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cédula de identidad:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Ingreso promedio mensual:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Profesión u ocupación:</h5></label>
        <br/><br/>
      </div>
    </div>
  );
};
