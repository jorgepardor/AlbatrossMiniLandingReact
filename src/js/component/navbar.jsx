import React from "react";

import logo from "/src/img/icon.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<a class="navbar-brand">
					<img
						src={logo}
						alt=""
						width="64"
						height="32"
						class="d-inline-block align-text-top"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active text-light"
								aria-current="page"
								href="#">
								About us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Fleet
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Contact
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light disabled">
								Corporate Access
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
