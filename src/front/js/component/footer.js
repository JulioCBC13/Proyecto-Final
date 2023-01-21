import React from "react";
import "/workspace/Proyecto-Final/src/front/js/component/navbar.css";
import { Link } from "react-router-dom";

export const Footer = () => (

  
  /*<footer classNameName="footer mt-auto py-3 text-center">
    <p>© 2022 Copyright: CONTAPLUS+</p>
  </footer>

/*<!-- Footer-->*/
  <footer className="bg-dark py-4 mt-auto">
    <div className="container px-5">
      <div className="row align-items-center justify-content-between flex-column flex-sm-row">
        <div className="col-auto">
          <div className="small m-0 text-white">ContaPlus &copy; 2023</div>
        </div>
        <div className="col-auto">
          {/* <a className="link-light small" href="#!">
            Privacy
          </a>
          <span className="text-white mx-1">&middot;</span>
          <a className="link-light small" href="#!">
            Terms
          </a>
          <span className="text-white mx-1">&middot;</span> */}
          <Link className="link-light small" to="about-us">
            Nosotros
            <i className="ms-2 fa-solid fa-users"></i>
          </Link>
          <Link className="link-light small ms-4" to="contact-us">
            Contáctanos
            <i className="ms-2 fa-regular fa-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
