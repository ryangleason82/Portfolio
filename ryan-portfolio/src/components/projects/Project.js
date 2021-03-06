import React from "react";
import ProfileGithub from "./Github";

const Project = () => {
  return (
    <div id="projects" className="container mt-3">
      <h3 className="ui horizontal header divider mt-4 mb-4">
        <p>Projects</p>
      </h3>
      <div className="ui">
        <div className="ui  grid">
          <div className="col-md-6 col-sm-12 mb-3 mt-3">
            <h3>Dreamcatcher</h3>
            <div className="ui bulleted list">
              <div className="item">
                Full stack web application using MERN (MongoDB, Express, React,
                Node) stack
              </div>
              <div className="item">
                Built and leveraged extensive API to allow users to share dreams
                and seek advice from professionals
              </div>
              <div className="item">
                Utilized JSON Web Token (JWT) for authorization and
                authentication to protect routes and user information
              </div>
              <div className="item">
                Designed front end using newest web technologies such as React,
                Redux, Semantic UI, React Bootstrap
              </div>
            </div>
            <h3>Machine Learning House Price Predictor</h3>
            <div className="ui bulleted list">
              <div className="item">
                Implemented “k-nearest-neighbor” algorithm to predict the price
                of a house based on houses in area
              </div>
              <div className="item">
                Leveraged Tensorflow.js to ensure optimal performance of large
                numerical computations
              </div>
              <div className="item">
                Important concepts learned: test vs training set, feature
                normalization, common ML data structures
              </div>
            </div>
            <h3>Server Authentication System</h3>
            <div className="ui bulleted list">
              <div className="item">
                Wrote software security program in C language to create server
                authentication system
              </div>
              <div className="item">
                Implemented defensive programming mechanisms and dynamic testing
                methods
              </div>
              <div className="item">
                Leveraged cryptographic operations from OpenSSL library and
                American Fuzzy Lop for black-box testing
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-3">
            <ProfileGithub />
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://github.com/ryangleason82"
          className="text-center btn btn-lg btn-dark"
        >
          Check Me Out on Github
        </a>
      </div>
    </div>
  );
};

export default Project;
