import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Signin } from "./pages/signin";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Registro } from "./pages/registro";
import { AboutUs } from "./pages/about-us";
import { Services } from "./pages/services";
import { Agendar } from "./pages/agendar";
import { Balance } from "./pages/balance";
import { Asesoria } from "./pages/asesoria";
import { Ingresos } from "./pages/ingresos";
import { Impuestos } from "./pages/impuestos";

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
            <Route element={<Signin />} path="/signin" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<Registro />} path="/registro" />
            <Route element={<AboutUs />} path="/about-us" />
            <Route element={<Services />} path="/services" />
            <Route element={<Agendar />} path="/agendar" />
            <Route element={<Balance />} path="/balance" />
            <Route element={<Ingresos />} path="/ingresos" />
            <Route element={<Impuestos />} path="/impuestos" />
            <Route element={<Asesoria />} path="/asesoria" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
