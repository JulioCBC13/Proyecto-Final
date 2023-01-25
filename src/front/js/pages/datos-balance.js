import React,{ useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../img/Balance datos.png";
import "../../img/balance.jpg";

export const BalanceDatos = () => {
  const { store, actions } = useContext(Context);
  useEffect(()=>{
    actions.loadBalances();
  },[])


  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance datos.png" alt="Servicios" />
      </div>
      <br/><br/>
      <div className="valores">
      <div>
        <h1>Datos del Balance Personal solicitado:</h1>
        </div>
        {/* <label for="formFile" className="form-label"><h5>Nombre completo:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cédula de identidad:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Información bancaria:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cantidad de vehículos que posee:</h5></label>
        <br/><br/>
        <label for="formFile" className="form-label"><h5>Cantidad de propiedades que posee:</h5></label> */}
        <br/><br/>
        {store.listaBalances.map((solicitud,index)=>
        <div className="card" key={index}>
        <img src="balance.jpg" className="card-img-top" alt="..."/>
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
