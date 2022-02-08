import React from "react";

import logo from "/src/img/icon.png";

const Footer = () => {
	return (
		<div className="container">
			<footer ClassName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<p ClassName="col-md-4 mb-0">
					© 2022 Albatross Corporate Jets, S.L.
				</p>

				<a class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
					<img src={logo} alt="" width="64" height="32" />
				</a>

				<ul ClassName="nav col-md-4">
					<li ClassName="nav-item">
						<a href="#" ClassName="nav-link px-2">
							Home
						</a>
					</li>
					<li ClassName="nav-item">
						<a href="#" ClassName="nav-link px-2">
							Features
						</a>
					</li>
					<li ClassName="nav-item">
						<a href="#" ClassName="nav-link px-2 ">
							Pricing
						</a>
					</li>
					<li ClassName="nav-item">
						<a href="#" ClassName="nav-link px-2">
							FAQs
						</a>
					</li>
					<li ClassName="nav-item">
						<a href="#" ClassName="nav-link px-4">
							About
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
