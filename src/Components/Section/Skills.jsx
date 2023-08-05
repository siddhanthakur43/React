import React from "react";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoMongodb,
  BiData,
BiLogoSpringBoot, BiLogoNodejs, BiLogoDocker} from "react-icons/bi";
import { FaJenkins } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";

function Skills() {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Throughout my college career I have explored multiple fields by
              being an active member of the robotics club and nurtured the
              skills I gained through consistent participation in hackathons and
              competitions.{" "}
            </p>
          </div>
          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  JavaScript<i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  React<i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Redux <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JEST <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Jenkins <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  Java<i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  RTL <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4 style={{ color: "var(--my-black)", fontFamily: "sans-serif" }}>
            Practice Areas
          </h4>
          {/* <hr style="border-color: var(--my-blue);"> */}
          <div
            className="row"
            style={{ color: "black", paddingTop: "2%", paddingBottom: "2%" }}
          >
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-laptop fa-4x" />
              <h3 className="feature-title">Computer Vision</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>Crowd counting System.</p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-microchip fa-4x" />
              <h3 className="feature-title">Automation</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>
                Microcontroller based solutions for your next world changing
                idea.
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-microchip fa-4x" />
              <h3 className="feature-title">Combat Robotics</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p>Prepared a combat robot.</p>
            </div>
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-code fa-4x" />
              <h3 className="feature-title">Responsive Web Design</h3>
              <hr style={{ borderColor: "var(--my-blue)" }} />
              <p style={{ fontSize: "1rem" }}>
                An online store, your profile or a java based webapp. I got it
                all.
              </p>
            </div>
          </div>
          <h4 style={{ color: "var(--my-black)", fontFamily: "sans-serif" }}>
            Frameworks &amp; Softwares
          </h4>
          <br />
          <div
            className="interests container"
            style={{ paddingTop: "2%", paddingBottom: "2%" }}
          >
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoReact />
                  <h3>React</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoRedux style={{ color: "#800080" }} />
                  <h3>Redux</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <AiOutlineCloudServer />
                  <h3>Azure</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <FaJenkins />
                  <h3>Jenkins</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoDocker style={{ color: "#00b7eb" }} />
                  <h3>Docker</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoNodejs />
                  <h3>Node</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoSpringBoot style={{ color: "#00ff00" }} />
                  <h3>Spring</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoSpringBoot style={{ color: "#00ff00 " }} />
                  <h3>Springboot</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <FaJenkins />
                  <h3>Jenkins</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiData />
                  <h3>MySQL</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <BiLogoMongodb />
                  <h3>MongoDB</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div
                  className="icon-box"
                  style={{ backgroundColor: "rgba(0,100,230,0.1)" }}
                >
                  <GiArtificialIntelligence />
                  <h3>Propmt Engineering</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
