import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light text-white bg-light fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#landing">
					Ryan Gleason
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mobile-nav"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="mobile-nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="#projects">
								{" "}
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#professional">
								{" "}
								Professional
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#extracurricular">
								{" "}
								Extracurricular
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contactme">
								{" "}
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
