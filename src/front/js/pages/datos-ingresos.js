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
      <br/><br/>
      <div>
        <h1>Datos de las Certificaciones de Ingresos solicitadas:</h1>
        </div>
      <div className="valores d-flex flex-row">
      <br/><br/>
        {store.listaIngresos.map((solicitud,index)=>
       <div className="card3 mx-3" key={index}>
       <div className="card2-body px-2 py-2">
       <h5 className="card2-title">Solicitud N. {index+1}</h5>
       <h5 className="card2-title">Hecha por: {solicitud.completeName}</h5>
       <h5 className="card2-title">Cédula: {solicitud.cedula}</h5>
       <h5 className="card2-title">Información Bancaria: {solicitud.promedioMensual}</h5>
       <h5 className="card2-title">Vehículos: {solicitud.ocupacion}</h5>
       <button className="btn btn-primary">Procesar</button>
       </div>
       </div>   
        )  } 
      </div>
      <br/><br/>
    </div>
  );
};
