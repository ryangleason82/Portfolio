import React from "react";

const Extracurricular = () => {
	return (
		<div id="extracurricular" className="container mt-3">
			<h3 className="ui horizontal header divider">
				<p>Extracurricular Activties</p>
			</h3>

			<div
				id="myCarousel"
				className="carousel slide centered"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active" />
					<li data-target="#myCarousel" data-slide-to="1" />
					<li data-target="#myCarousel" data-slide-to="2" />
				</ol>

				<div className="carousel-inner">
					<div className="item active">
						<img src={require("../img/one.jpg")} alt="Los Angeles" />
					</div>

					<div className="item">
						<img src={require("../img/two.jpg")} alt="Chicago" />
					</div>

					<div className="item">
						<img src={require("../img/three.jpg")} alt="New York" />
					</div>
				</div>

				<a
					className="left carousel-control"
					href="#myCarousel"
					data-slide="prev"
				>
					<span className="glyphicon glyphicon-chevron-left" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="right carousel-control"
					href="#myCarousel"
					data-slide="next"
				>
					<span className="glyphicon glyphicon-chevron-right" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};

export default Extracurricular;
