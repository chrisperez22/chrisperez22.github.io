import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import us from "../../img/mario.jpg"
import user1 from "../../img/maya.jpg"
import user2 from "../../img/bec.jpg"
import user3 from "../../img/lil.jpg"

import { Context } from "../store/appContext";

import "../../styles/aboutus.css";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	return (
	
	
	<div>
		<h2>About Our Company</h2>
	<div>

	</div>
		
		<div className="testimonials">
		<div className="container">
			<h2>Testimonials</h2>
			<span className="line"></span>
			<div className="content">
				<div className="card">
					<img src={user1} alt="user1"/>
					<p>It is not every day that you come across a passionate and trustworthy company. Mario Vilchez is true professional who does his work really well. Thanks Mario!</p>
					<p><span>Maya Perez</span></p>
					<p></p>
				</div>
				<div className="card">
				<img src={user3} alt="user1"/>
					<p>Wonderful guy, very friendly, and has done numerous services for my family; he is without a doubt the finest in Florida.</p>
					<p><span>David Perez</span></p>
					<p></p>
				</div>
				<div className="card">
					<img src={user2} alt="user1"/>
					<p>Very good at communicating with clients, offered various alternatives for my budget, and completed my driveway sooner than I expected. Definitely worth recommending.</p>
					<p><span>Cecile Gomez</span></p>
					<p></p>
				</div>
	
			
		</div>
		</div>
		</div>
		{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};
