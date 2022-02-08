import React from "react";

const Footer = () => {
	return (
		<footer class="container py-3 my-5">
			<ul class="nav justify-content-center border-top pt-3 mb-1">
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-muted">
						Home
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-muted">
						Features
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-muted">
						Pricing
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-muted">
						FAQs
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link px-2 text-muted">
						About
					</a>
				</li>
			</ul>
			<p class="text-center text-muted">
				© 2022 Albatross Corporate Jets, Inc.
			</p>
		</footer>
	);
};

export default Footer;
