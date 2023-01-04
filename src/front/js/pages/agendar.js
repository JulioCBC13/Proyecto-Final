import React from "react";

import "../../img/Agendar title.png";
import "../../img/asesoria.jpg";
import "../../img/agendar.png";

export const Agendar = () => {
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="350" height="350" alt="Contaplus" />
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
      <div className="valores">
      <div className="mb-3">
  <label for="formFile" className="form-label">Default file input example</label>
  <input className="form-control" type="file" id="formFile"/>
</div>
<div className="mb-3">
  <label for="formFileMultiple" className="form-label">Multiple files input example</label>
  <input className="form-control" type="file" id="formFileMultiple" multiple/>
</div>
<div className="mb-3">
  <label for="formFileDisabled" className="form-label">Disabled file input example</label>
  <input className="form-control" type="file" id="formFileDisabled" disabled/>
</div>
<div className="mb-3">
  <label for="formFileSm" className="form-label">Small file input example</label>
  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
<div>
  <label for="formFileLg" className="form-label">Large file input example</label>
  <input className="form-control form-control-lg" id="formFileLg" type="file"/>
</div>
      </div>
    </div>
  );
};
