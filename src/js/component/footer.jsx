import React from "react";

const Footer = () => {
	return (
		<footer className="container py-3 my-5">
			<ul className="nav justify-content-center border-top pt-3 mb-1">
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Features
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						Pricing
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						FAQs
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-muted">
						About
					</a>
				</li>
			</ul>
			<p className="text-center text-muted">
				© 2022 Albatross Corporate Jets, Inc.
			</p>
		</footer>
	);
};

export default Footer;
