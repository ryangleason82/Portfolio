import React from "react";

const Professional = () => {
  return (
    <div id="professional" className="container mt-3">
      <h3 className="ui horizontal header divider mt-5 mb-5">
        <p>Professional</p>
      </h3>
      <div className="ui">
        <div className="ui  grid">
          <div className="col-md-12 col-sm-12">
            <h3>
              JP Morgan Chase & Co. - <i>Software Engineer</i> on{" "}
              <i>Site Reliability Engineering Team </i>
            </h3>
            <div className="ui bulleted list">
              <div className="item">
                Automated deployment pipeline of Control-M changes using Java
                Spring Boot microservice
              </div>
              <div className="item">
                Created Microservice Scheduling app using React and Spring Boot
              </div>
              <div className="item">
                Reduced duration of long running job from 9 hours to 3 using
                parallel processing
              </div>
              <div className="item">
                Engineered shell scripts to automate cleaning of disk space to
                properly maintain healthy servers{" "}
              </div>
            </div>
            <h3>
              Medium - <i>Technical Writer/Teacher</i>
            </h3>
            <div className="ui bulleted list">
              <div className="item">
                Giving back to the developer community by teaching what I’ve
                learned
              </div>
              <div className="item">
                20,000 views on articles in first month on Web Dev topics
                (React, Node.js, Spring)
              </div>
              <div className="item">
                Published by top web developer publishers on Medium: Better
                Programming and Codeburst
              </div>
            </div>
            <h3>
              Economy League - Force For Good Project - <i>Web Developer</i>
            </h3>
            <div className="ui bulleted list">
              <div className="item">
                End to end development of non-profit Philadelphia Anchors of
                Growth and Equity platform
              </div>
              <div className="item">
                Designed layout of website with Balsamiq wireframes during
                weekly meetings with client
              </div>
              <div className="item">
                Implemented design with custom code in Node JS, Apostrophe
                framework, MongoDB and Bootstrap
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
