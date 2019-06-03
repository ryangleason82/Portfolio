import React from "react";

const Professional = () => {
	return (
		<div id="professional" className="container mt-3">
			<h3 className="ui horizontal header divider">
				<p>Professional</p>
			</h3>
			<div className="ui">
				<div className="ui  grid">
					<div className="twelve wide column">
						<h3>JP Morgan Chase & Co. - Site Reliability Engineer</h3>
						<div className="ui bulleted list">
							<div className="item">
								Optimized database queries using indexing and temp-tables to
								improve performance
							</div>
							<div className="item">
								Engineered shell scripts to automate cleaning of disk space to
								properly maintain healthy server
							</div>
							<div className="item">
								Implemented Powershell script to enforce uniformity of
								configuration files in order to reduce potential P1 issues{" "}
							</div>
							<div className="item">
								Rolled out Splunk and Dynatrace monitoring tools across large
								distributed applications{" "}
							</div>
						</div>
						<h3>Economy League - Force For Good Project - Web Developer</h3>
						<div className="ui bulleted list">
							<div className="item">
								Worked closely with non-profit client to deliver Content
								Management System website
							</div>
							<div className="item">
								Implemented design with custom code in Node JS, Apostrophe
								framework, MongoDB and Bootstrap
							</div>
							<div className="item">
								Designed layout of website by creating Balsamiq wireframes after
								various work sessions with the client
							</div>
						</div>
						<h3>JP Morgan Chase & Co. - Software Engineer Intern</h3>
						<div className="ui bulleted list">
							<div className="item">
								Automated tedious process through parsing and web API calls
							</div>
							<div className="item">
								Hosted on internal cloud headlessly to leverage cloud
								environment
							</div>
							<div className="item">
								Developed using Python with cloud compliant database integration
							</div>
							<div className="item">
								Exposed to source control, agile and scrum practices, open
								source libraries, and security practices
							</div>
						</div>
					</div>
					<div className="four wide column centered ">
						<img
							className="ui centered medium circular   image"
							alt="headshot"
							src={require("../img/RyanHeadshot.PNG")}
						/>
					</div>
				</div>
			</div>
			<h4>A Little Bit More in Depth</h4>
		</div>
	);
};

export default Professional;
