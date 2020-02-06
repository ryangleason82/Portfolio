import React from "react";

const ContactMe = () => {
  return (
    <div id="aboutme" className="container mt-3">
      <h3 className="ui horizontal header divider mt-5 mb-4">
        <p>About Me</p>
      </h3>
      <div className="ui">
        <div className="ui grid">
          <div className="five wide column text-center">
            <div>
              <i className="book huge icon" />
              <h3>
                <small>
                  Born about an hour north of Philadelphia, I received a degree
                  in Computer Science from the College of Engineering at
                  Pennsylvania State University
                </small>
              </h3>
            </div>
          </div>
          <div className="six wide column text-center">
            <div>
              <i className="bolt huge icon" />
              <h3>
                <small>
                  Searching for a fast-paced, fun culture where I am surrounded
                  by passionate and motivated technologists who band together to
                  solve a challenging problem.
                </small>
              </h3>
            </div>
          </div>
          <div className="five wide column text-center">
            <div>
              <i className="code huge icon" />
              <h3>
                <small>
                  I am a highly motivated, curious, energetic problem solver who
                  has a very strong desire to learn and grow and loves to code!
                </small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
