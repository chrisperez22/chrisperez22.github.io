import React from "react";
import { Link } from "react-router-dom";
import nine from "../../img/logo.jpg"
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar bg-black sticky-top">
			<div classname="brand">
			<Link to="/">
				<img className="logo" src={nine}/>
			</Link>
			<h9 className="number">𝘾𝘼𝙇𝙇 𝙐𝙎 𝙏𝙊𝘿𝘼𝙔 ! (786)-296-4730<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝙁𝙧𝙚𝙚 𝙀𝙨𝙩𝙞𝙢𝙖𝙩𝙚𝙨 !</h9>

			</div>
			<div className="options justify-content-end">
			
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
