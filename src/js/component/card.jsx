import React from "react";

import CardInfo from "/src/js/component/cardinfo.jsx";
const Card = () => {
	return (
		<div class="d-flex justify-content-center">
			<div className="card">
				<CardInfo
					title="Locked and loaded vertical integration"
					image="https://picsum.photos/200/200"
					paragraph="We've got kpis for that rock Star/Ninja driving the initiative forward start procrastinating 2 hours get to do work while procrastinating"
					buttonLink="#"
					buttonText="Obviously"
				/>
			</div>
			<div className="card">
				<CardInfo
					title="Tiger team"
					image="https://picsum.photos/300/300"
					paragraph="Organic growth service as core innovations as pow"
					buttonLink="#"
					buttonText="Service as core"
				/>
			</div>
			<div className="card">
				<CardInfo
					title="High performance"
					image="https://picsum.photos/400/400"
					paragraph="Our competitors are jumping the shark red flag, and commitment to the cause . Locked and loaded that jerk from finance really threw me under the bus, looks great."
					buttonLink="#"
					buttonText="Agile deep dive"
				/>
			</div>
		</div>
	);
};

export default Card;
