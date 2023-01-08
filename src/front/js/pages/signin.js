import React from "react";
import "../../styles/signin.css";

export const Signin = () => {
  return (
    
      <section className="boxContacto" id="linkContacto">
        <h3>Contact us</h3>

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
      </section>
    
  );
};
