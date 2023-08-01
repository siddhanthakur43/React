import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <h3>Siddhant Singh Thakur</h3>
          <div className="social-links">
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
              href="https://www.instagram.com/_wakeupsidd"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhanthakur"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Siddhant Singh Thakur, 2021</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
