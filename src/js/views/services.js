import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/services.css";

export const Services = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<p>hello</p>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
