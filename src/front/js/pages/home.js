import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
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
    <div className="carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="carrusel1.jpg"
              width="200"
              height="500"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Cada bolívar cuenta</h3>
              <h4>
                Todos menosprecian al Bolívar pero ¿puedes deshacerte de él por
                completo?
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="carrusel2.jpg"
              width="200"
              height="500"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Cuentas claras conservan empresas</h3>
              <h4>
                La importancia de llevar un control estricto de las finanzas de
                una empresa
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="carrusel3.jpg"
              width="200"
              height="500"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Herramientas que facilitan la comprensión</h3>
              <h4>
                Los gráficos pueden ayudarte a entender mejor las altas y las
                bajas de tu negocio
              </h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*<!-- FIN COROUSEL-->*/}
      <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <header className="bg-dark py-5">
            <div className="container px-5">
              <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-8 col-xl-7 col-xxl-6">
                  <div className="my-5 text-center text-xl-start">
                    <h1 className="display-5 fst-italic fw-bolder text-white mb-2">
                      Contaplus
                    </h1>
                    <br />
                    <h2 className="text-white">
                      El Plus que tu empresa necesita
                    </h2>
                    <p className="lead fw-normal text-white-50 mb-4">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                      <Link
                        className="btn btn-light btn-lg px-4 me-sm-3"
                        to="/services"
                      >
                        Nuestros Servicios
                      </Link>
                      {/*
                      <a className="btn btn-outline-light btn-lg px-4" href="#!">
                      Learn More
                    </a>
                    */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                  <img
                    className="img-fluid rounded-3 my-5"
                    src="contaplus.png"
                    alt="..."
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </header>
          {/*<!-- Features section-->*/}
          <section className="py-5" id="features">
            <div className="container px-5 my-5">
              <div className="row gx-5">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <h1 className="fw-bolder mb-0">
                    AL CONTRATAR NUESTROS SERVICIOS TENDRÁS:
                  </h1>
                </div>
                <div className="col-lg-8">
                  <div className="row gx-5 row-cols-1 row-cols-md-2">
                    <div className="col mb-5 h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-collection"></i>
                      </div>
                      <h2 className="h5 fw-bolder">RESPONSABILIDAD</h2>
                      <h5>
                        Es nuestra misión cumplir con lo que ofrecemos, siempre
                        haremos lo posible por responder eficientemente ante tus
                        valiosos requerimientos.
                      </h5>
                    </div>
                    <div className="col mb-5 h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-building"></i>
                      </div>
                      <h2 className="h5 fw-bolder">PUNTUALIDAD</h2>
                      <h5>
                        Los lapsos de entrega son muy importantes para nosotros
                        y para muchos organismos, los retrasos son molestos, así
                        que los evitamos a toda costa.
                      </h5>
                    </div>
                    <div className="col mb-5 mb-md-0 h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-toggles2"></i>
                      </div>
                      <h2 className="h5 fw-bolder">COMPROMISO</h2>
                      <h5>
                        A nadie le gusta quedar a la deriva, nunca te dejaremos
                        caer en ella. Siempre estaremos atentos para aclarar tus
                        dudas y llevarte por buen camino.
                      </h5>
                    </div>
                    <div className="col h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-toggles2"></i>
                      </div>
                      <h2 className="h5 fw-bolder">PROFESIONALISMO</h2>
                      <h5>
                        Nuestro equipo está formado por personas con gran
                        experiencia en el área, capacitados para ayudarte a
                        solventar tus necesidades.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*<!-- Blog preview section-->*/}
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <div className="text-center">
                    <h1 className="fw-bolder">NOVEDADES FINANCIERAS</h1>
                    <p className="lead fw-normal text-muted mb-5">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row gx-5">
                <div className="col-lg-4 mb-5">
                  {/* ---------------- card 1 ---------------- */}
                  <div className="card h-100 shadow border-0">
                    <img className="card-img-top" src="dolar.jpg" alt="..." />
                    <div className="card-body p-4">
                      <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        Noticias
                      </div>
                      <a
                        className="text-decoration-none link-dark stretched-link"
                        id="link"
                        href="https://www.bcv.org.ve/"
                        target={"_blank"}
                      >
                        <h5 className="card-title mb-3">
                          Tipo de Cambio BCV: 19,4520 Bs./USD (+0,90%) para el
                          lunes 16 de Enero
                        </h5>
                      </a>
                      <p className="card-text mb-0">
                        El BCV informa que el tipo de cambio promedio ponderado
                        resultante de las operaciones diarias de las mesas de
                        cambio activas de las instituciones bancarias
                        participantes se ubicó en 19,4520 Bs/USD (+0,90%). Para
                        más información en www.bcv.org.ve haciendo click a este
                        anuncio
                      </p>
                    </div>
                  </div>
                </div>
                {/* ---------------- card 2 ---------------- */}
                <div className="col-lg-4 mb-5">
                  <div className="card h-100 shadow border-0">
                    <img
                      className="card-img-top"
                      src="billetes bs.jpg"
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        Noticias
                      </div>
                      <a
                        className="text-decoration-none link-dark stretched-link"
                        href="#!"
                      >
                        <h5 className="card-title mb-3">
                          Hermes Pérez analiza la causa de la hiperinflación en
                          Venezuela: “la emisión excesiva de dinero”
                        </h5>
                      </a>
                      <p className="card-text mb-0">
                        El economista y profesor universitario, Hermes Pérez,
                        aseveró que persiste la causa de la hiperinflación en
                        Venezuela por «la emisión excesiva de dinero para
                        financiar (ilegal) al fisco».
                      </p>
                    </div>
                  </div>
                </div>
                {/* ---------------- card 3 ---------------- */}
                <div className="col-lg-4 mb-5">
                  <div className="card h-100 shadow border-0">
                    <img className="card-img-top" src="bolsa.jpg" alt="..." />
                    <div className="card-body p-4">
                      <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                        Noticias
                      </div>
                      <a
                        className="text-decoration-none link-dark stretched-link"
                        id="link"
                        href="https://www.bolsadecaracas.com/"
                        target={"_blank"}
                      >
                        <h5 className="card-title mb-3">
                          Índice Bursátil Caracas cerró el #13Ene en 20.236,75
                          puntos (+1,94%) en 4 días
                        </h5>
                      </a>
                      <p className="card-text mb-0">
                        En la Bolsa de Valores de Caracas, entre el 10 y el 13
                        de enero de 2023, se negoció un total de 8 millones 446
                        mil 919 bolívares. Para más información en
                        www.bolsadecaracas.com haciendo click a este anuncio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              

              {/*<!-- Testimonial section
            <div className="py-5 bg-light">
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

              <div class="accordion" id="accordionExample">
              <div className="text-center">
                  <h1 className="fw-bold ">PREGUNTAS FRECUENTES</h1>
                </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Por qué necesito un contador?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Si trabajas de forma independiente necesitarás Inscripción en el SENIAT, presentar declaraciones juradas y mantenerte constantemente actualizado. Contar con el conocimiento de un especialista te permitirá reducir riesgos, ahorrar mucho tiempo y tomar decisiones acertadas.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ¿Puedo contar con un contador online?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Claro! Es la forma más eficiente de tener asesoramiento oportuno y siempre disponible.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ¿Cuánto cuesta un contador online?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Nos especializamos en emprendedores, e-commerce y empresas digitales. Contamos con planes especialmente pensados para cada actividad. A través de una breve llamada, te recomendaremos la propuesta que mejor se adapte a tu necesidad. Contrata Valor.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      ¿Cuánto tiempo tengo para declarar las retenciones de ISLR siendo contribuyente ordinario?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Todas las retenciones aplicadas en un periodo son declaradas al mes posterior de las misma y tendrás tiempo de declararlas dentro de los 10 primeros días corrientes de cada mes si eres contribuyente ordinario.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      ¿Quiénes están sujetos a pagar el IGTF?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Todas las personas naturales y jurídicas están sujetas al IGTF cuando pagan en divisas o cualquier instrumento monetario diferente al bolívar o criptomonedas distintas al Petro.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      ¿Cuál es la alícuota de este impuesto y sobre qué base se calcula?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      La alícuota del IGTF es del 0,75% y aplica sobre el importe total de los débitos en cuenta o de las operaciones gravadas. El IGTF será determinado diariamente. Existe la obligación de pagar el IGTF cuando ocurra el pago o cancelación de una cuenta o deuda. la base imponible del IGTF es el importe total pagado en moneda extranjera y/o Criptoactivos, excluyendo las retenciones de impuesto sobre la renta e IVA, las cuales claramente no forman parte de lo pagado en moneda extranjera y/o Criptoactivos.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      ¿Todos los comercios deben cobrar este impuesto?
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      No. Solo los comercios o empresas que hayan sido designados sujetos pasivos especiales tienen el deber de ser agentes de percepción del IGTF por los pagos que reciban en moneda extranjera.
      </div>
    </div>
  </div>
</div>
              <aside className="bg-dark rounded-3 p-4 p-sm-5 mt-5">
                <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                  <div className="mb-4 mb-xl-0">
                    <div className="fs-3 fw-bold text-white">
                      ÚNETE A NUESTRO BOLETÍN SEMANAL
                    </div>
                    <div className="text-white-50">
                      {/*<!-- TEXTO AQUI!! -->*/}
                    </div>
                  </div>
                  <div className="ms-xl-4">
                    <div className="input-group mb-2">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ingresa aquí tu email"
                        aria-label="Email address..."
                        aria-describedby="button-newsletter"
                      />
                      <button
                        className="btn btn-outline-light"
                        id="button-newsletter"
                        type="button"
                      >
                        Afiliarme
                      </button>
                    </div>
                    <div className="small text-white-50">
                      Tendrás mucha información de interés y actualizada
                    </div>
                  </div>
                </div>
              </aside>
              {/*<!-- HERRAMIENTAS/ TECNOLOGIAS/ LENGUAJES USADOS ICONOS-->*/}
              <div className="container px-5 my-5">
                <div className="text-center">
                  <h1 className="fw-bold ">TECNOLOGÍAS</h1>
                </div>
                {/*<!-- SECCION 1 - 3 iconos -->*/}
                <div className="row justify-content-center">
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="github.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="gitpod.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="bootstrap.png"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="html.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="css.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="js.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="react.png"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-between justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="flask.png"
                        width="70"
                        height="70"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="python.png"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  <div className="col d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <img
                        className="img-fluid mb-1 px-2"
                        src="sql.png"
                        width="90"
                        height="90"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
