import React from "react";
import "../../styles/contact-us.css";
import "../../img/Contact title.png";
import "../../img/redes sociales.png";

export const ContactUs = () => {
  return (
    <div className="contact" id="linkContacto">
    <div className="title-page d-flex justify-content-between align-items-center">
        <img src="redes sociales.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Contact title.png" alt="Contáctanos" />
      </div>
      <div className="descripcion">
        <img src="contador 3.jpg" width="450" height="250" alt="images"/>
        <div className="texto1">
            <h4>Puedes mantenerte en contacto con nosotros siguiéndonos a través de nuestras diferentes cuentas de redes sociales, en las cuales te ofrecemos información actualizada sobre el mundo financiero, tips para mejorar el manejo de tus recursos y muchas cosas más. ¡Anímate y crece con nosotros!</h4>
            </div>
        </div>
        <br/><br/>
      <div className="container contacto">
        <div class="p-4 pt-0 border-top-0">
          <div class="d-flex align-items-end justify-content-between">
            <div class="d-flex align-items-center">
              <img class=" me-3" src="twitter.png" alt="..." />
              <div class="small">
                <div class="fw-bold"><h1>@contaplus</h1></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container contacto">
      <div class="card-footer p-4 pt-0 border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class="me-3" src="instagram.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold"><h1>@contaplus</h1></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="container contacto">
                  <div class="card-footer p-4 pt-0 border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class=" me-3" src="facebook.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold"><h1>Contaplus</h1></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <br/>
    </div>
  );
};
