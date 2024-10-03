import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Cards from "./cards";
import Navbar from "./navBar";
import Jumbo from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (

		<div className="container">
			<div className="row justify-content-center">
				<div>
					<Navbar/>
				</div>
				<div>
					<Jumbo/>
				</div>
				<div className="col-auto pb-3">
					<Cards 
						titulo = "Primer card"
						imagen={"https://picsum.photos/id/237/200"}
						descripcion="Lorem ipsum dolor sit amet."
					/>
				</div>
				<div className="col-auto pb-3">
				<Cards 
						titulo = "Segundo card"
						imagen={"https://picsum.photos/id/27/200"}
						descripcion="Lorem ipsum dolor sit amet."
					/>
				</div>
				<div className="col-auto pb-3">
				<Cards 
						titulo = "Tercer card"
						imagen={"https://picsum.photos/id/200/200"}
						descripcion="Lorem ipsum dolor sit amet."
					/>
				</div>
				<div className="col-auto pb-3">
				<Cards 
						titulo = "Cuarto card"
						imagen={"https://picsum.photos/id/100/200"}
						descripcion="Lorem ipsum dolor sit amet."
					/>
				</div>

					<Footer/>
		
			</div>
		</div>


	);
};

export default Home;
