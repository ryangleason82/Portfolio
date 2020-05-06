import React from "react";

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-12 text-center">
              <h2 className="display-4 mb-4 font-weight-bold">
                Welcome to the Home of Ryan Gleason!
              </h2>
              <p className="lead">
                Learn more about my projects, my professional career and some of
                my extracurriculars!
              </p>
              <hr />
              <a href="#projects" className="btn btn-lg btn-light mr-2 mt-2">
                Projects
              </a>
              <a
                href="#professional"
                className="btn btn-lg btn-light mr-2 mt-2"
              >
                Professional
              </a>
              <a href="#blog" className="btn btn-lg btn-light mr-2 mt-2">
                Blog
              </a>
              <a
                href="#extracurricular"
                className="btn btn-lg btn-light mr-2 mt-2"
              >
                Extracurricular
              </a>
              <a href="#contactme" className="btn btn-lg btn-light mr-2 mt-2">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
