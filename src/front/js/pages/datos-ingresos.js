import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Ingresos datos.png";
import "../../img/ingresos.jpg";

export const IngresosDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadIngresos();
  },[])

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
      <div>
        <h1>Datos de la Certificación de Ingresos solicitada:</h1>
        </div>
      <div className="valores d-flex flex-row">
      <br/><br/>
        {store.listaIngresos.map((solicitud,index)=>
        <div className="card mx-3" key={index}>
        <div className="card-body">
        <h5 className="card-title">Solicitud de {solicitud.cedula} {index+1}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary">Go somewhere</button>
        </div>
        </div>  
        )  } 
      </div>
    </div>
  );
};
