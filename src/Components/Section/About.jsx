import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am Mechanical Engineering graduate, with deep interest in
              Computer Vision, Automation and robotics which are well
              demonstrated in my projects. I have represented and captained
              India in competetive robotics and also have been the organiser for
              the biggest robotics event in Madhya Pradesh.
            </p>
          </div>
          <div className="row main-text" style={{ paddingTop: "1rem" }}>
            <div className="col-lg-3" style={{ bottom: "3rem" }}>
              <img
                style={{ marginTop: "53%" }}
                id="photo"
                src="assets\img\profile.jpg"
                width="80%"
                alt="Profile"
              />
            </div>
            <div className="col-lg-9 para-text">
              <ul className="nav nav-pills" style={{ paddingLeft: "20%" }}>
                <li className="nav-item pill-1">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    style={{ padding: "8px" }}
                    href="#home"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item pill-1">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    style={{ padding: "8px" }}
                    href="#menu1"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item pill-1">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    style={{ padding: "8px" }}
                    href="#menu2"
                  >
                    Experience
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane container active"
                  id="home"
                  style={{ paddingTop: "3%" }}
                >
                  <br />
                  <h3>About me</h3>
                  <hr style={{ borderColor: "var(--my-blue)" }} />
                  <br />
                  <table style={{ width: "100%" }} className="para-text">
                    <tbody>
                      <tr>
                        <td style={{ color: "var(--my-blue)" }}>Name</td>
                        <td>Siddhant Singh Thakur</td>
                        <td style={{ color: "var(--my-blue)" }}>
                          Date of Birth
                        </td>
                        <td>05 November 1999</td>
                      </tr>
                      <tr>
                        <td style={{ color: "var(--my-blue)" }}>
                          Qualification
                        </td>
                        <td>B.Tech Mechanical Engineering</td>
                        <td style={{ color: "var(--my-blue)" }}>College</td>
                        <td>Acropolis Institute of Technology And Research</td>
                      </tr>
                      <tr>
                        <td style={{ color: "var(--my-blue)" }}>
                          Phone Number
                        </td>
                        <td>+91 747 729 2838</td>
                        <td style={{ color: "var(--my-blue)" }}>Email Id</td>
                        <td>siddhantthakur43@gmail.com</td>
                      </tr>
                      <tr>
                        <td style={{ color: "var(--my-blue)" }}>
                          Current Role
                        </td>
                        <td>System Engineer Trainee @ Infosys</td>
                        <td style={{ color: "var(--my-blue)" }}>City</td>
                        <td>Gurgaon, Haryana</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr style={{ borderColor: "var(--my-blue)" }} />
                  <br />I am an avid learner who is highly adaptable to new
                  technologies. My practice area remains on devising Computer
                  Visiom algorithms to automate everyday tasks via a touchless
                  approach.
                  <div className="counts container">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                          <i className="icofont-code-alt" />
                          <span data-toggle="counter-up">4</span>
                          <p>Languages</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                          <i className="icofont-document-folder" />
                          <span data-toggle="counter-up">10</span>
                          <p>Projects</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                          <i className="icofont-badge" />
                          <span data-toggle="counter-up">100</span>
                          <p>Hours Of Code</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                          <i className="icofont-award" />
                          <span data-toggle="counter-up">6</span>
                          <p>Awards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu1">
                  <br />
                  <br />
                  <h3>Education</h3>
                  <hr style={{ borderColor: "var(--my-blue)" }} />
                  <br />
                  <div className="resume-item">
                    <h4>Bachelor's of Technology</h4>
                    <h5>2017 - 2021</h5>
                    <p>
                      <em>
                        Acropolis Institute of Technology And Research, Indore,
                        MP
                      </em>
                    </p>
                    <p>Mechanical Engineering, 7.47 CGPA</p>
                  </div>
                  <div className="resume-item">
                    <h4>Senior Secondary Schooling</h4>
                    <h5>2016 - 2017</h5>
                    <p>
                      <em>Model High School, Jabalpur, MP</em>
                    </p>
                    <p>PCM, 84.2%</p>
                  </div>
                  <div className="resume-item">
                    <h4>Higher Secondary Schooling</h4>
                    <h5>2014 - 2015</h5>
                    <p>
                      <em>Model High School, Jabalpur, MP</em>
                    </p>
                    <p>PCM, 84.83%</p>
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu2">
                  <br />
                  <br />
                  <h3>Experience</h3>
                  <hr style={{ borderColor: "var(--my-blue)" }} />
                  <br />
                  <div className="resume-item">
                    <h4>System Engineer </h4>
                    <h5>Feb 2022 - Current</h5>
                    <p>
                      <em>Infosys Limited</em>
                    </p>
                    <p></p>
                    <p>
                      Currently working in Travel and Lifestyle Services team as
                      a Frontend Engineer, for production deployed CRM product
                      called OPUS, building on the top of a micro- frontend
                      technology knows as one-app.
                    </p>
                    <li>
                      Delivering exciting new features and playing a key part
                      member as an agile member of scrum team.
                    </li>
                    <li>Following SDLC best practices.</li>
                    <li>
                      Working in agile environment to produce rapid development
                      in the iterations for the client.
                    </li>
                    <li>
                      Interacting with stakeholders in order to understand the
                      requirement and suggesting different solutions.
                    </li>
                    <li>Writing unit test cases with jest and RTL.</li>
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4> System Engineer Trinee</h4>
                    <h5>Nov 2021 - Jan 2022</h5>
                    <p>
                      <em>Infosys Limited</em>
                    </p>
                    <p></p>
                    <li>Trained in Java, Spring, Spring boot and SQL.</li>
                
                    <p />
                  </div>
                  <div className="resume-item">
                    <h4>Mechatronics Engineer Intern</h4>
                    <h5>January 2018 - March 2020</h5>
                    <p>
                      <em>I bot Technologies.</em>
                    </p>
                    <p></p>
                    <li>We developed, designed the combat robots.</li>
                    <li>
                      Reported and optimised day to day bugs in robotics system
                      design.
                    </li>
                    <p />
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

export default About;
