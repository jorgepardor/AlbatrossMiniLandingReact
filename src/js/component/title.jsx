import React from "react";

import Mainlogo from "/src/img/main_logo.png";
import Mainbg from "/src/img/title_bg.jpg";

const Title = () => {
	return (
		<div
			className="container-fluid background"
			style={{ backgroundImage: `url(${Mainbg})` }}>
			<div className="row jumbo py-5 text-center">
				<div className="col-12">
					<img src={Mainlogo} alt="" className="logoMain" />
					<p className="lead text-light">
						Best practices message the initiative, hire the best
						value prop, productize the deliverables and focus on the
						bottom line.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Title;

//
