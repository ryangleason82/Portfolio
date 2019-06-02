import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light text-white bg-light mb-4">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Ryan Gleason
				</Link>
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
							<Link className="nav-link" to="/">
								{" "}
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								{" "}
								Professional
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								{" "}
								Extracurricular
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
