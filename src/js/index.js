//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Navbar from "./component/navbar.jsx";
import Title from "./component/title.jsx";
import Main from "./component/main.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<Title />
		<Main />
	</div>,
	document.querySelector("#app")
);
