import React from "react";

const CardInfo = ({ title, image, paragraph, buttonLink, buttonText }) => {
	return (
		<div>
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{paragraph}</p>
				<a href={buttonLink} className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
};

export default CardInfo;
