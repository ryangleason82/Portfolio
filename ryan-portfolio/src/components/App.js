import React from "react";
import Landing from "./layout/Landing";
import NavBar from "./layout/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./layout/Footer";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path="/" component={Landing} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
