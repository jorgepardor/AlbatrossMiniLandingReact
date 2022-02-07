import React from "react";

import Card from "./card.jsx";

//create your first component
const Main = () => {
	return (
		<div class="d-flex justify-content-center">
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Main;
