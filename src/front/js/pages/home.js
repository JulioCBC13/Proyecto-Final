import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../img/contaplus.png";
import "../../img/html.png";
import "../../img/css.png";
import "../../img/js.png";
import "../../img/react.png";
import "../../img/python.png";
import "../../img/flask.png";
import "../../img/boostrap.png";
import "../../img/github.png";
import "../../img/gitpod.png";
import "../../img/postgre.png";
import "../../img/sql.png";
import "../../img/bcv.png";
import "../../img/btc.png";
import "../../img/btc.png";
import "../../img/dolar.png";
import "../../img/instagram.png";
import "../../img/facebook.png";
import "../../img/twitter.png";

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
          <img src="contaplus.png" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="bcv.png" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="contador 3.jpg" width="200" height="500" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
                    Contaplus el Plus que tu Empresa necesita
                  </h1>
                  <p class="lead fw-normal text-white-50 mb-4">
                    {/*<!-- TEXTO AQUI!! -->*/}
                  </p>
                  <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a
                      class="btn btn-primary btn-lg px-4 me-sm-3"
                      href="#features"
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
                <h2 class="fw-bolder mb-0">SERVICIOS</h2>
              </div>
              <div class="col-lg-8">
                <div class="row gx-5 row-cols-1 row-cols-md-2">
                  <div class="col mb-5 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-collection"></i>
                    </div>
                    <h2 class="h5">CERTIFICACIÓN DE INGRESOS</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col mb-5 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-building"></i>
                    </div>
                    <h2 class="h5">DECLARACIÓN DE IMPUESTOS</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col mb-5 mb-md-0 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">BALANCE PERSONAL</h2>
                    <p class="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div class="col h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">ASESORÍA FINANCIERA</h2>
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
                  <h2 class="fw-bolder">NOVEDADES FINANCIERAS</h2>
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
                  <img class="card-img-top" src="bcv.png" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 class="card-title mb-3">Blog post title</h5>
                    </a>
                    <p class="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class=" me-3" src="twitter.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Kelly Rowan</div>
                          <div class="text-muted">
                            March 12, 2022 &middot; 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------- card 2 ---------------- */}
              <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                  <img class="card-img-top" src="btc.png" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      Media
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 class="card-title mb-3">Another blog post title</h5>
                    </a>
                    <p class="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class="me-3" src="instagram.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Josiah Barclay</div>
                          <div class="text-muted">
                            March 23, 2022 &middot; 4 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ---------------- card 3 ---------------- */}
              <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                  <img class="card-img-top" src="dolar.png" alt="..." />
                  <div class="card-body p-4">
                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      class="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 class="card-title mb-3">
                        The last blog post title is a little bit longer than the
                        others
                      </h5>
                    </a>
                    <p class="card-text mb-0">
                      Some more quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div class="d-flex align-items-end justify-content-between">
                      <div class="d-flex align-items-center">
                        <img class=" me-3" src="facebook.png" alt="..." />
                        <div class="small">
                          <div class="fw-bold">Evelyn Martinez</div>
                          <div class="text-muted">
                            April 2, 2022 &middot; 10 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- HERRAMIENTAS/ TECNOLOGIAS/ LENGUAJES USADOS ICONOS-->*/}
            <div class="container px-5 my-5">
              <div class="text-center">
                <h1 class="fw-bold ">TECNOLOGIAS</h1>
                <p class="lead fw-normal text-muted mb-3">
                  {/*<!-- TEXTO AQUI!! -->*/}
                </p>
              </div>
              {/*<!-- SECCION 1 - 3 iconos -->*/}
              <div class="row gx-5 row-cols-1 row-cols-sm-4 justify-content-center">
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="github.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="gitpod.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="boostrap.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- SECCION 2 - 4 iconos -->*/}
              <div class="row gx-5 row-cols-1 row-cols-sm-4 justify-content-center">
                <div class="col">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="html.png" width="50" height="50" alt="..." />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="css.png" width="50" height="50" alt="..." />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="js.png" width="50" height="50" alt="..." />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="react.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="flask.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="python.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img
                      class="img-fluid mb-1 px-2"
                      src="postgre.png" width="50" height="50"
                      alt="..."
                    />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-center">
                    <img class="img-fluid mb-1 px-2" src="sql.png" width="50" height="50" alt="..." />
                    <h5 class="fw-bolder">{/*<!-- TEXTO AQUI!! -->*/}</h5>
                    <div class="fst-italic text-muted">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
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
            <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
              <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                <div class="mb-4 mb-xl-0">
                  <div class="fs-3 fw-bold text-white">AGENDAR CITA</div>
                  <div class="text-white-50">{/*<!-- TEXTO AQUI!! -->*/}</div>
                </div>
                <div class="ms-xl-4">
                  <div class="input-group mb-2">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email address..."
                      aria-label="Email address..."
                      aria-describedby="button-newsletter"
                    />
                    <button
                      class="btn btn-outline-light"
                      id="button-newsletter"
                      type="button"
                    >
                      Que necesitas?
                    </button>
                  </div>
                  <div class="small text-white-50">
                    Responderemos todas tus preguntas
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
