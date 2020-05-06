import React from "react";

const ContactMe = () => {
  return (
    <div id="aboutme" className="container ">
      <h3 className="ui horizontal header divider mt-5 mb-4">
        <p className="mb-3 mt-3">About Me</p>
      </h3>
      <div className="ui">
        <div className="ui grid">
          <div className="col-md-4 text-center">
            <div>
              <i className="book huge icon" />
              <p className="mt-4 mb-4">
                <b>
                  Born about an hour north of Philadelphia, I received a degree
                  in Computer Science from the College of Engineering at
                  Pennsylvania State University
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <i className="bolt huge icon" />
              <p className="mt-4 mb-4">
                <b>
                  Searching for a fast-paced, fun culture where I am surrounded
                  by passionate and motivated technologists who band together to
                  solve a challenging problem.{" "}
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <i className="code huge icon" />
              <p className="mt-4 mb-4">
                <b>
                  I am a highly motivated, curious, energetic problem solver who
                  has a very strong desire to learn and grow and loves to code!
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
