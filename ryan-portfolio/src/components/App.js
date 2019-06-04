import React from "react";
import Landing from "./layout/Landing";
import NavBar from "./layout/NavBar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/Footer";
import Project from "./projects/Project";
import Professional from "./professional/Professional";
import Extracurricular from "./extracurricular/Extracurricular";
import ContactMe from "./contactme/ContactMe";

const App = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Landing />
				<Project />
				<Professional />
				<Extracurricular />
				<ContactMe />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
