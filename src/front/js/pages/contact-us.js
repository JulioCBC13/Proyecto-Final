import React from "react";
import "../../styles/contact-us.css";
import "../../img/Contact title.png";

export const ContactUs = () => {
  return (
    <div className="Contact" id="linkContacto">
    <div className="title-page d-flex justify-content-between align-items-center">
        <img src="contaplus.png" width="310" height="280" alt="Contaplus" />
        <br />
        <img src="Contact title.png" alt="Contáctanos" />
      </div> 

      <div className="container contacto">
        <form id="miForm">
          <div className="row">
            <div className="form-group col-md-6">
              <label for="inputName">
                <b>First Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="First Name..."
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputLastName">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                placeholder="Last Name..."
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label for="inputEmail">
              <b>Email</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email..."
              required
            />
          </div>

          <div className="form-group">
            <label for="inputSubject">
              <b>Subject</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputSubject"
              placeholder="Subject..."
              required
            />
          </div>

          <div className="form-group">
            <label for="message">
              <b>Message</b>
            </label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              placeholder="Message..."
              required
            ></textarea>
          </div>

          <button type="submit" className="botonEnviarMensaje">
            Send Message
          </button>
        </form>
      </div>
      <div class="p-4 pt-0 bg-success border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class=" me-3" src="twitter.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Kelly Rowan</div>
                          <div class="text-white">
                            March 12, 2022 &middot; 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-danger border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class="me-3" src="instagram.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Josiah Barclay</div>
                          <div class="text-white">
                            March 23, 2022 &middot; 4 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-primary border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class=" me-3" src="facebook.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Evelyn Martinez</div>
                          <div class="text-white">
                            April 2, 2022 &middot; 10 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  );
};
