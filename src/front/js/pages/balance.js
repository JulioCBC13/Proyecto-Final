import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../img/Balance title.png";
import "../../img/balance.jpg";

export const Balance = () => {
  const { store, actions } = useContext(Context);

  const [nombreCompleto, setNombreCompleto] = useState("");
  const [Cedula, setCedula] = useState("");
  const [infoBancos, setInfoBancos] = useState("");
  const [infoCarros, setInfoCarros] = useState("");
  const [infoCasas, setInfoCasas] = useState("");

  const crearBalance = async () => {
    actions.nuevoBalance({
      completeName: nombreCompleto,
      cedula: Cedula,
      bancoInfo: await uploadImage(infoBancos),
      vehiculosAmount: infoCarros,
      propiedadesAmount: infoCasas,
    });
  };

  const uploadImage = async (file) => {
    const urlCloudinary =
      "https://api.cloudinary.com/v1_1/dsxi1c9ri/image/upload";

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "mr852grd");

    try {
      let resp = await fetch(urlCloudinary, {
        method: "POST",
        body: formData,
      });

      let data = await resp.json();
      return data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="agendar">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus2.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Balance title.png" alt="Servicios" />
      </div>
      <div className="descripcion">
        <img src="balance.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Los balances personales son documentos contables que muestran
            información acerca de la situación financiera particular del
            solicitante, que incluye detalles debidamente ordenados acerca de
            los activos, pasivos y patrimonios que se poseen en un momento
            determinado.
          </h4>
        </div>
      </div>
      <br />
      <br />
      <div className="valores">
        <div>
          <h1>Solicite un Balance Personal a continuación:</h1>
        </div>
        <br />
        <label className="form-label">
          <h5>Ingrese su nombre completo:</h5>
        </label>
        <br />
        <input
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <label className="form-label">
          <h5>Ingrese su número de cédula de identidad:</h5>
        </label>
        <br />
        <input
          value={Cedula}
          onChange={(e) => setCedula(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <label className="form-label">
          <h5>Ingrese su información bancaria:</h5>
        </label>
        <br />
        <input onChange={(e) => setInfoBancos(e.target.files[0])} type="file" />
        <br />
        <br />
        <label className="form-label">
          <h5>Ingrese la cantidad de vehículos que posee:</h5>
        </label>
        <br />
        <input
          value={infoCarros}
          onChange={(e) => setInfoCarros(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <label className="form-label">
          <h5>Ingrese la cantidad de propiedades que posee:</h5>
        </label>
        <br />
        <input
          value={infoCasas}
          onChange={(e) => setInfoCasas(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <button
          onClick={crearBalance}
          type="submit"
          className="btn btn-success"
        >
          Solicitar Balance
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};
