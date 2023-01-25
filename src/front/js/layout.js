import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { ContactUs } from "./pages/contact-us";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registro } from "./pages/registro";
import { AboutUs } from "./pages/about-us";
import { Services } from "./pages/services";
import { Balance } from "./pages/balance";
import { BalanceDatos } from "./pages/datos-balance";
import { Asesoria } from "./pages/asesoria";
import { AsesoriaDatos } from "./pages/datos-asesoria";
import { Ingresos } from "./pages/ingresos";
import { IngresosDatos } from "./pages/datos-ingresos";
import { Impuestos } from "./pages/impuestos";
import { ImpuestosDatos } from "./pages/datos-impuestos";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<ContactUs />} path="/contact-us" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Registro />} path="/registro" />
            <Route element={<AboutUs />} path="/about-us" />
            <Route element={<Services />} path="/services" />
            <Route element={<Balance />} path="/balance" />
            <Route element={<BalanceDatos />} path="/datos-balance" />
            <Route element={<Ingresos />} path="/ingresos" />
            <Route element={<IngresosDatos />} path="/datos-ingresos" />
            <Route element={<Impuestos />} path="/impuestos" />
            <Route element={<ImpuestosDatos />} path="/datos-impuestos" />
            <Route element={<Asesoria />} path="/asesoria" />
            <Route element={<AsesoriaDatos />} path="/datos-asesoria" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
