import React from "react";
import { Link } from "react-router-dom";
import nine from "../../img/logo.jpg"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar bg-black mb-3">
			<Link to="/">
				<img className="logo" src={nine}/>
			</Link>
			<div className="ml-auto">
			<Link to="/">
				<span className="btn btn-primary">Home</span>
			</Link>
				<Link to="/demo">
					<button className="btn btn-primary">About Us</button>
				</Link>
				<Link to="/gallery">
					<button className="btn btn-primary">Gallery</button>
				</Link>
				<Link to="/services">
					<button className="btn btn-primary">Services</button>
				</Link>
				<Link to="/charts">
					<button className="btn btn-primary">Color Charts</button>
				</Link>
			</div>
		</nav>
	);
};
