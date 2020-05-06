import React from "react";

const Certifications = () => {
  return (
    <div id="aboutme" className="container ">
      <h3 className="ui horizontal header divider mt-5 mb-4">
        <p className="mb-3 mt-3">Certifications</p>
      </h3>
      <div className="ui">
        <div className="col-md-12 text-center">
          <div>
            <img src={require("../img/aws.png")} alt="aws" />
            <p className="mt-4 mb-4">
              <b>AWS Cloud Developer - Associate</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
