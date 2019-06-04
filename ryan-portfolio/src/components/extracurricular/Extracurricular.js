import React from "react";
import ImageList from "./ImageList";

const Extracurricular = () => {
	const images = [
		{ id: 1, src: "a.jpg" },
		{ id: 2, src: "b.jpg" },
		{ id: 3, src: "h.jpg" },
		{ id: 4, src: "d.jpg" },
		{ id: 5, src: "e.jpg" },
		{ id: 6, src: "f.jpg" },
		{ id: 7, src: "g.jpg" },
		{ id: 8, src: "c.jpg" },
		{ id: 9, src: "i.jpg" },
		{ id: 10, src: "j.jpg" },
		{ id: 11, src: "m.jpg" },
		{ id: 12, src: "l.png" },
		{ id: 13, src: "k.png" },
		{ id: 14, src: "n.jpg" },
		{ id: 15, src: "v.jpg" }
	];
	return (
		<div id="extracurricular" className="container mt-3">
			<h3 className="ui horizontal header divider mt-5 mb-5">
				<p>In My Free Time</p>
			</h3>
			<ImageList images={images} />
		</div>
	);
};

export default Extracurricular;
