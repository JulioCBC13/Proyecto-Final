import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../img/contaplus.png";
import "../../img/html.png";
import "../../img/css.png";
import "../../img/js.png";
import "../../img/react.png";
import "../../img/dolar.jpg";
import "../../img/python.png";
import "../../img/flask.png";
import "../../img/bootstrap.png";
import "../../img/github.png";
import "../../img/gitpod.png";
import "../../img/sql.png";
import "../../img/bcv.png";
import "../../img/billetes bs.jpg";
import "../../img/bolsa.jpg";
import "../../img/instagram.png";
import "../../img/facebook.png";
import "../../img/twitter.png";
import "../../img/carrusel1.jpg";
import "../../img/carrusel2.jpg";
import "../../img/carrusel3.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    /*<!--HEADER-->*/
    /*<!-- INICIO COROUSEL-->*/
    <div class="carousel">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="carrusel1.jpg" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3>Cada bolívar cuenta</h3>
            <h4>Todos menosprecian al Bolívar pero ¿puedes deshacerte de él por completo?</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img src="carrusel2.jpg" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3>Cuentas claras conservan empresas</h3>
            <h4>La importancia de llevar un control estricto de las finanzas de una empresa</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img src="carrusel3.jpg" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h3>Herramientas que facilitan la comprensión</h3>
            <h4>Los gráficos pueden ayudarte a entender mejor las altas y las bajas de tu negocio</h4>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    {/*<!-- FIN COROUSEL-->*/}
    <body class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <header class="bg-dark py-5">
          <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
              <div class="col-lg-8 col-xl-7 col-xxl-6">
                <div class="my-5 text-center text-xl-start">
                  <h1 class="display-5 fst-italic fw-bolder text-white mb-2">
                    Contaplus<br/>el Plus que tu Empresa necesita
                  </h1>
                  <p class="lead fw-normal text-white-50 mb-4">
                    {/*<!-- TEXTO AQUI!! -->*/}
                  </p>
                  <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      class="btn btn-primary btn-lg px-4 me-sm-3"
                      href="services"
                    >
                      Nuestros Servicios
                    </a>
                    {/*
                      <a class="btn btn-outline-light btn-lg px-4" href="#!">
                      Learn More
                    </a>
                    */}
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <img
                  class="img-fluid rounded-3 my-5"
                  src="contaplus.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </header>
        {/*<!-- Features section-->*/}
        <section class="py-5" id="features">
          <div class="container px-5 my-5">
            <div class="row gx-5">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <h1 class="fw-bolder mb-0">SERVICIOS</h1>
              </div>
              <div class="col-lg-8">
                <div class="row gx-5 row-cols-1 row-cols-md-2">
                  <div class="col mb-5 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-collection"></i>
                    </div>
                    <h2 class="h5">RESPONSABILIDAD</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col mb-5 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-building"></i>
                    </div>
                    <h2 class="h5">PUNTUALIDAD</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col mb-5 mb-md-0 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">COMPROMISO</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">PROFESIONALISMO</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Blog preview section-->*/}
        <section class="py-5">
          <div class="container px-5 my-5">
            <div class="row gx-5 justify-content-center">
              <div class="col-lg-8 col-xl-6">
                <div class="text-center">
                  <h1 class="fw-bolder">NOVEDADES FINANCIERAS</h1>
                  <p class="lead fw-normal text-muted mb-5">
                    {/*<!-- TEXTO AQUI!! -->*/}
                  </p>
                </div>
              </div>
            </div>
            <div class="row gx-5">
              <div class="col-lg-4 mb-5">
                {/* ---------------- card 1 ---------------- */}
                <div class="card h-100 shadow border-0">
                  <img class="card-img-top" src="dolar.jpg" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      Noticias
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link" id="link"
                      href="https://www.bcv.org.ve/" target={"_blank"}
                    >
                      <h5 class="card-title mb-3">Tipo de Cambio BCV: 19,4520 Bs./USD (+0,90%) para el lunes 16 de Enero</h5>
                    </a>
                    <p class="card-text mb-0">
                    El BCV informa que el tipo de cambio promedio ponderado resultante de las operaciones diarias de las mesas de cambio activas de las instituciones bancarias participantes se ubicó en 19,4520 Bs/USD (+0,90%). Para más información en www.bcv.org.ve haciendo click a este anuncio
                    </p>
                  </div>
                </div>
              </div>
              {/* ---------------- card 2 ---------------- */}
              <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                  <img class="card-img-top" src="billetes bs.jpg" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      Noticias
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 class="card-title mb-3">Hermes Pérez analiza la causa de la hiperinflación en Venezuela: “la emisión excesiva de dinero”</h5>
                    </a>
                    <p class="card-text mb-0">
                    El economista y profesor universitario, Hermes Pérez, aseveró que persiste la causa de la hiperinflación en Venezuela por «la emisión excesiva de dinero para financiar (ilegal) al fisco».
                    </p>
                  </div>
                </div>
              </div>
              {/* ---------------- card 3 ---------------- */}
              <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                  <img class="card-img-top" src="bolsa.jpg" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      Noticias
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link" id="link"
                      href="https://www.bolsadecaracas.com/" target={"_blank"}
                    >
                      <h5 class="card-title mb-3">
                      Índice Bursátil Caracas cerró el #13Ene en 20.236,75 puntos (+1,94%) en 4 días
                      </h5>
                    </a>
                    <p class="card-text mb-0">
                    En la Bolsa de Valores de Caracas, entre el 10 y el 13 de enero de 2023, se negoció un total de 8 millones 446 mil 919 bolívares. Para más información en www.bolsadecaracas.com haciendo click a este anuncio
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            {/*<!-- HERRAMIENTAS/ TECNOLOGIAS/ LENGUAJES USADOS ICONOS-->*/}
            <div class="container px-5 my-5">
              <div class="text-center">
                <h1 class="fw-bold ">TECNOLOGÍAS</h1>
              </div>
              {/*<!-- SECCION 1 - 3 iconos -->*/}
              <div class="row justify-content-center">
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="github.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="gitpod.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="bootstrap.png" width="80" height="80"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="html.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="css.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="js.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="react.png" width="80" height="80"/>
                  </div>
                </div>
                <div class="col d-flex align-items-between justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="flask.png" width="70" height="70"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="python.png" width="80" height="80"/>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="sql.png" width="90" height="90"/>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Testimonial section
            <div class="py-5 bg-light">
              <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                  <div class="col-lg-10 col-xl-7">
                    <div class="text-center">
                      <div class="fs-4 mb-4 fst-italic">
                        "Working with Start Bootstrap templates has saved me
                        tons of development time when building new projects!
                        Starting with a Bootstrap template just makes things
                        easier!"
                      </div>
                      <div class="d-flex align-items-center justify-content-center">
                        <img
                          class="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div class="fw-bold">
                          Tom Ato
                          <span class="fw-bold text-primary mx-1">/</span>
                          CEO, Pomodoro
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->*/}
            {/*<!-- Call to action-->*/}
            <aside class="bg-dark rounded-3 p-4 p-sm-5 mt-5">
              <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                <div class="mb-4 mb-xl-0">
                  <div class="fs-3 fw-bold text-white">ÚNETE A NUESTRO BOLETÍN SEMANAL</div>
                  <div class="text-white-50">{/*<!-- TEXTO AQUI!! -->*/}</div>
                </div>
                <div class="ms-xl-4">
                  <div class="input-group mb-2">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Ingresa aquí tu email"
                      aria-label="Email address..."
                      aria-describedby="button-newsletter"
                    />
                    <button
                      class="btn btn-outline-light"
                      id="button-newsletter"
                      type="button"
                    >
                    Afiliarme
                    </button>
                  </div>
                  <div class="small text-white-50">
                    Tendrás mucha información de interés y actualizada
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      {/*<!-- Bootstrap core JS-->*/}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/*<!-- Core theme JS-->*/}
      <script src="js/scripts.js"></script>
    </body>
    {/*<!-- DIV FINAL COROUSEL-->*/}
    </div>
  );
};
