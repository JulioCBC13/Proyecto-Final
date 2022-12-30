import React from "react";
import "/workspace/Proyecto-Final/src/front/styles/services.css";
import "../../img/Servicios.png";
import "../../img/balance.jpg";
import "../../img/ingresos.jpg";
import "../../img/impuestos.png";
import "../../img/asesoria.jpg";
import "../../img/agendar.png";

export const Services = () => {
  return (
    <div className="services">
      <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="350" height="350" alt="Contaplus" />
        <br />
        <img src="Servicios.png" alt="Servicios" />
      </div>
      <div className="descripcion">
        <img src="balance.jpg" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Somos una empresa que busca dar respuesta oportuna a las necesidades
            de nuestros clientes en el área contable, a través de la prestación
            de servicios que le ahorran tiempo y dinero que resultan ser
            elementos muy valiosos para ellos en su día a día.
          </h4>
          <form>
            <button type="submit" className="btn btn-success">
              Balance Personal
            </button>
          </form>
        </div>
      </div>
      <div className="descripcion2">
        <div className="texto1">
          <h4>
            Por ello nos enfocamos en el diseño de herramientas que les generen
            los documentos que necesitan con más frecuencia haciendo uso de las
            tecnologías web más potentes del momento, de manera que sus trámites
            puedan verse lo más agilizados posible. Pasa el mouse sobre ellos
            para conocerlos un poco más.
          </h4>
          <form>
            <button type="submit" className="btn btn-success">
              Certificación de Ingresos
            </button>
            <br />
            <br />
          </form>
        </div>
        <img src="ingresos.jpg" width="450" height="250" alt="images" />
      </div>
      <div className="descripcion">
        <img src="impuestos.png" width="450" height="250" alt="images" />
        <div className="texto1">
          <h4>
            Somos una empresa que busca dar respuesta oportuna a las necesidades
            de nuestros clientes en el área contable, a través de la prestación
            de servicios que le ahorran tiempo y dinero que resultan ser
            elementos muy valiosos para ellos en su día a día.
          </h4>
          <form>
            <button type="submit" className="btn btn-success">
              Declaración de Impuestos
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
      <div className="descripcion2">
        <div className="texto1">
          <h4>
            Por ello nos enfocamos en el diseño de herramientas que les generen
            los documentos que necesitan con más frecuencia haciendo uso de las
            tecnologías web más potentes del momento, de manera que sus trámites
            puedan verse lo más agilizados posible. Pasa el mouse sobre ellos
            para conocerlos un poco más.
          </h4>
          <form>
            <button type="submit" className="btn btn-success">
              Asesoría Financiera
            </button>
            <br />
            <br />
          </form>
        </div>
        <img src="asesoria.jpg" width="450" height="250" alt="images" />
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
          <form>
            <button type="submit" className="btn btn-success">
              Otros Servicios
            </button>
          </form>
        </div>
      </div>
      <div class="last"></div>
    </div>
  );
};
