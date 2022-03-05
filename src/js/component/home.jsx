import React from "react";
import Navbar1 from "./navbar.jsx";
import Carta from "./carta.jsx";
import Jumbo from "./jumbotron.jsx";
import Footer from "./foot.jsx";
import "/src/styles/index.css";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar1 />
			<div className="container-fluid">
				<div className="col" id="jumbo">
					<Jumbo />
				</div>
				<div className="my-3 row">
					<Carta />
					<Carta />
					<Carta />
					<Carta />
				</div>
			</div>
			<div className="bg-dark">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
