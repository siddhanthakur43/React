import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-AiPow">Aerodynamics</li>
                <li data-filter=".filter-apps">Apps</li>
                <li data-filter=".filter-Robots">Robots</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-AiPow">
              <div className="portfolio-wrap">
                <img
                  src="assets\img\portfolio\para.jpeg"
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="portfolio-info">
                  <h4>Paraglider</h4>
                  <p>It can fly up to range of 500m !</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/glider.gif"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="https://youtube.com/shorts/QOJJ7wpA3E4?feature=share"
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      title="View Code"
                    >
                      <i className="bx bx-link" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/BqJo2JtHvjW/?utm_medium=copy_link"
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      title="View Code"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-Robots">
              <div className="portfolio-wrap">
                <img
                  src="assets\img\portfolio\Bigboss.jpeg"
                  className="img-fluid"
                  alt="Profile"
                />
                <img
                  src="assets\img\portfolio\Bigboss1.jpeg"
                  className="img-fluid"
                  alt="Profile"
                />
                <img
                  src="assets\img\portfolio\Bigboss2.jpeg"
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="portfolio-info">
                  <h4>Bigboss</h4>
                  <p>
                    Behold the king of middleweight category robot fighting !
                  </p>
                  <div className="portfolio-links">
                    <a
                      href="assets\img\portfolio\Bigboss.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="https://youtu.be/YWuJDhl-t-U"
                      data-gall="portfolioDetailsGallery"
                      title="View Videos"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-Robots">
              <div className="portfolio-wrap">
                <img
                  src="assets\img\portfolio\mini.jpeg"
                  className="img-fluid"
                  alt="Profile"
                />
                <div className="portfolio-info">
                  <h4>Mini Bigboss</h4>
                  <p>The prince of featherweight robot fighting cometh !</p>
                  <div className="portfolio-links">
                    <a
                      href="assets\img\portfolio\mini.jpeg"
                      data-gall="portfolioGallery"
                      className="venobox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="https://youtu.be/2YaqMesIUZc"
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      title="View Videos"
                    >
                      <i className="bx bx-link" />
                    </a>
                    <a
                      href="https://youtu.be/S6DzG69AF34"
                      data-gall="portfolioDetailsGallery"
                      data-vbtype="iframe"
                      title="View Videos"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
