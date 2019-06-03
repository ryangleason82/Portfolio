import React from "react";
import ProfileGithub from "./Github";

const Project = () => {
	return (
		<div id="projects" className="container mt-3">
			<h3 className="ui horizontal header divider">
				<p>Projects</p>
			</h3>
			<div className="ui">
				<div className="ui  grid">
					<div className="eight wide column">
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
								Redux, Material UI and hosted on AWS
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
						<h3>Video Streaming Site</h3>
						<div className="ui bulleted list">
							<div className="item">
								Created Twitch-like web based application using React and Redux
							</div>
							<div className="item">
								Used OBS (Open Broadcaster Software) and RTMP to allow users to
								live stream content
							</div>
							<div className="item">
								Utilized Google OAuth for authorization and authentication to
								protect routes and user information
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
					<div className="eight wide column ">
						<ProfileGithub />
					</div>
				</div>
			</div>

			<div className="text-center mt-4">
				<a
					href="https://github.com/ryangleason82"
					className="text-center btn btn-lg btn-dark"
				>
					Check Me Out on Github!
				</a>
			</div>
		</div>
	);
};

export default Project;
