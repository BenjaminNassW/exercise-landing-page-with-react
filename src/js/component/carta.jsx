import React from "react";

function Carta() {
	return (
		<div className=" col-sm-12 col-md-3">
			<img
				src="https://br.jetss.com/wp-content/uploads/2018/07/31907940_2100809473324119_2122429626293682176_n-e1532093669742.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
export default Carta;
