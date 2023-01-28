import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../img/Ingresos title.png";
import "../../img/ingresos.jpg";

export const Ingresos = () => {
  const { store, actions } = useContext(Context);

  const [nombreCompleto, setNombreCompleto] = useState("");
  const [Cedula, setCedula] = useState("");
  const [promIngMensual, setPromIngMensual] = useState("");
  const [profesion, setProfesion] = useState("");

  const crearCertifIngresos = async () => {
    actions.nuevaCertifIngresos({
      completeName: nombreCompleto,
      cedula: Cedula,
      promedioMensual: promIngMensual,
      ocupacion: profesion,
    });
  };
  
  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
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
        <label className="form-label"><h5>Ingrese su nombre completo:</h5></label>
        <br/>
        <input value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} type="text"/>
        <br/><br/>
        <label className="form-label"><h5>Ingrese su número de cédula de identidad:</h5></label>
        <br/>
        <input value={Cedula} onChange={(e) => setCedula(e.target.value)} type="text"/>
        <br/><br/>
        <label className="form-label"><h5>Ingrese su ingreso promedio mensual:</h5></label>
        <br/>
        <input value={promIngMensual} onChange={(e) => setPromIngMensual(e.target.value)} type="text"/>
        <br/><br/>
        <label className="form-label"><h5>Ingrese su profesión u ocupación:</h5></label>
        <br/>
        <input value={profesion} onChange={(e) => setProfesion(e.target.value)} type="text"/>
        <br/><br/>
        <button onClick={crearCertifIngresos} type="submit" className="btn btn-success">
              Enviar solicitud
            </button>
            <br/><br/>
      </div>
    </div>
  );
};
