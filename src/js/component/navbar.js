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
			<h9 className="number">𝘾𝘼𝙇𝙇 𝙐𝙎 𝙏𝙊𝘿𝘼𝙔 ! <a href="tel:(786)-296-4730">(786)-296-4730</a><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝙁𝙧𝙚𝙚 𝙀𝙨𝙩𝙞𝙢𝙖𝙩𝙚𝙨 !</h9>

			</div>
			<div className="options justify-content-end">
			
			<Link to="/">
			<button className="button"onClick="document.getElementByID('middle').scrollIntoView();">Home</button>			
			</Link>
				<Link to="/aboutus">
					<button className="button"onClick="document.getElementByID('middle').scrollIntoView();">About Us</button>
				</Link>
				<Link to="/gallery">
				<button className="button"onClick="document.getElementByID('middle').scrollIntoView();">Gallery</button>
				</Link>
				<Link to="/services">
				<button className="button"onClick="document.getElementByID('middle').scrollIntoView();">Services</button>
				</Link>
				<Link to="/contact">
				<button className="button"onClick="document.getElementByID('middle').scrollIntoView();">Request Quote</button>
				</Link>
			</div>
		</nav>
	);
};
