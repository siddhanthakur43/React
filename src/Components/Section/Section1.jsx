import React from "react";

function Section1() {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay={100}>
          <h1>Siddhant Singh Thakur</h1>
          <p>
            I'm a FrontEnd Developer
            <span
              className="typed"
              data-typed-items="Mechanical Engineer. ,Mechatronics Engineer. ,Robotics Enthusiast. ,Photographer. , "
            />
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/siddhanthakur"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://github.com/Siddhanthakur43" className="Git">
              <i className="bx bxl-github" />
            </a>
            <a href="https://twitter.com/siddhanthakur43" className="twitter">
              <i className="bx bxl-twitter" />
            </a>
            <a
              href="https://www.facebook.com/siddhant.singhthakur.33"
              className="facebook"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="https://www.instagram.com/siddhanthakur.__/"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </a>
            {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
