import React from "react";
import Navbar1 from "./navbar.jsx";
import Carta from "./carta.jsx";
import Jumbo from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar1 />
			<Jumbo />
			<div style={{ display: "flex" }}>
				<Carta />
				<Carta />
				<Carta />
			</div>
		</div>
	);
};

export default Home;
