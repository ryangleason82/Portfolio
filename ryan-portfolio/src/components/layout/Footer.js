import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white text-black mt-3 p-4 text-center">
			Copyright &copy; {new Date().getFullYear()} Ryan Gleason |
			<a href="mailto:ryangleason82@gmail.com">ryangleason82@gmail.com</a>
		</footer>
	);
};

export default Footer;
