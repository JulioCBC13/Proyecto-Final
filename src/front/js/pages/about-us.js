import React from "react";
import "../../styles/about-us.css";
import "../../img/reunion.jpg";
import "../../img/contador 3.jpg";
import "../../img/Juan.jpg";
import "../../img/Julio.jpg";
import "../../img/Miguel.jpg";
import "../../img/Oscar.jpg";

export const AboutUs = () => {
    return (
        <div className="about-us">
        <div className="title-page d-flex justify-content-center align-items-center">
            <h1>¿Quiénes somos?</h1>
        </div>
        <div className="descripcion">
        <img src="contador 3.jpg" width="450" height="250" alt="images"/>
        <div className="texto1">
            <h4>Somos un grupo de desarrolladores que se unió para dar respuesta a una necesidad que se detectó respecto a la gestión de documentos contables y que nos sentíamos capaces de resolver a través de una herramienta moderna, rápida y eficiente. Pasa el mouse sobre las fotos para saber más.</h4>
            </div>
        </div>
        <div className="descripcion2">
        <div className="texto1">
            <h4>Somos un grupo de desarrolladores que se unió para dar respuesta a una necesidad que se detectó respecto a la gestión de documentos contables y que nos sentíamos capaces de resolver a través de una herramienta moderna, rápida y eficiente. Pasa el mouse sobre las fotos para saber más.</h4>
            </div>
            <img src="reunion.jpg" width="450" height="250" alt="images"/>
        </div>
        <br/>
        <div className="title-page d-flex justify-content-center align-items-center">
            <h1>Nuestro equipo:</h1>
        </div>
        <br/><br/>
    <div className="box">
        <div className="card">
          <div className="imgBx">
            <img src="Juan.jpg" alt="images"/>
          </div>
          <div className="details">
            <h2>Juan Cabrera<br/><span>About Us Dev</span></h2>
        </div>
        </div>
        <div className="card">
            <div className="imgBx">
               <img src="Miguel.jpg" alt="images"/>
            </div>
            <div className="details">
               <h2>Miguel Gil<br/><span>Home Dev</span></h2>
             </div>
          </div>
          <div className="card">
            <div className="imgBx">
               <img src="Julio.jpg" alt="images"/>
            </div>
            <div className="details">
               <h2>Julio Blando<br/><span>Register Dev</span></h2>
             </div>
          </div>
          <div className="card">
            <div className="imgBx">
               <img src="Oscar.jpg" alt="images"/>
            </div>
            <div className="details">
               <h2>Óscar Álvarez<br/><span>Log In Dev</span></h2>
             </div>
          </div>
    </div>
    <div class="last"></div>
</div>
    );
};
