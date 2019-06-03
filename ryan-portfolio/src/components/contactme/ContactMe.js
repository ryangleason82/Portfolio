import React from "react";

const ContactMe = () => {
	return (
		<div id="contactme" className="container mt-3">
			<h3 className="ui horizontal header divider">
				<p>Contact Me</p>
			</h3>
			<div className="text-center">
				<a
					href="mailto:ryangleason82@gmail.com"
					className="text-center btn btn-lg btn-dark"
				>
					Email Me!
				</a>
			</div>
		</div>
	);
};

export default ContactMe;
