import React from "react";

import Mainlogo from "/src/img/main_logo.png";
import Mainbg from "/src/img/title_bg.jpg";

const Title = () => {
	return (
		<div className="jumbo p-5 mb-4">
			<div className="container-fluid py-5">
				<img
					src={Mainlogo}
					alt=""
					width="454"
					height="340"
					class="d-inline-block align-text-top"
				/>
				<p className="col-md-8 fs-4">
					Best practices message the initiative but hire the best
					value prop. Pig in a python zoom meeting at 2:30 today
					strategic staircase, yet onward and upward, productize the
					deliverables and focus on the bottom line let's circle back
					tomorrow.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Fly with us
				</button>
			</div>
		</div>
	);
};

export default Title;
