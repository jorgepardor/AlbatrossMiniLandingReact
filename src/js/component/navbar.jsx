import React from "react";

import logo from "/src/img/icon.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand mx-5">
					<img
						src={logo}
						alt=""
						width="150"
						height="33"
						className="d-inline-block align-text-top"
					/>
				</a>
				<button
					className="navbar-toggler custom-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon custom-toggler">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-list"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
					</span>
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
							<a className="nav-link disabled">
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
