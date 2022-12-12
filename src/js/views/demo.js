import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import us from "../../img/mario.jpg"

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<img src={us}></img>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};
