import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import chart from "../../img/chart.jpg"
import charta from "../../img/chart2.jpg"
import chartb from "../../img/chart3.jpg"
import chartc from "../../img/chart4.jpg"
import chartd from "../../img/chart5.jpg"
import { Context } from "../store/appContext";

import "../../styles/charts.css";

export const Charts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-white">
			<img classname="chart"src={chart}></img>
			<img classname="chart"src={charta}></img>
			<img classname="chart"src={chartb}></img>
			<img classname="chart"src={chartc}></img>
			<img classname="chart"src={chartd}></img>
			
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};
