import React, { Component } from "react";

class ImageCard extends Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render() {
		return (
			<div
				className="img_wrap"
				style={{ gridRowEnd: `span ${this.state.spans}` }}
			>
				<img
					ref={this.imageRef}
					src={require(`../img/extra/${this.props.image.src}`)}
					alt="hi"
				/>
				<div className="img_description">This looks great!</div>
			</div>
		);
	}
}

export default ImageCard;
