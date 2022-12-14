import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import work4 from "../../img/tile.jpg";
import pool from "../../img/pooldeck.jpg";
import work2 from "../../img/fence.jpg";
import work3 from "../../img/euro.jpg";
import work5 from "../../img/job9.jpg";
import "../../styles/services.css";

export const Services = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="container text-center">
  {/* <div class="row justify-align">
    <div class="first col">
		<div class="head bg-black">
      <h1>𝕊𝕥𝕒𝕞𝕡𝕖𝕕 ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work4}></img>
		<div class="footer1">
		The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.
		</div>
	  </div>
	  
    </div>

    <div class="first col">
	<div class="head bg-black">
      <h1>ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖 ℙ𝕠𝕠𝕝 𝔻𝕖𝕔𝕜</h1>
	  </div>
	  <div>
	  <img class="pic2" src={pool}></img>
	  <div class="footer">
		For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. 
			
		</div>
	  </div>
    </div>
    <div class="first col">
	<div class="head bg-black">
      <h1>𝔼𝕦𝕣𝕠 𝕋𝕚𝕝𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work3}></img>
		<div class="footer3">
		Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.

		</div>
	  </div>
    </div>
  </div>
  <br></br>
  <div class="row">
    <div class="first col">
		<div class="head bg-black">
      <h1>𝔸𝕝𝕦𝕞𝕚𝕟𝕦𝕞 𝔽𝕖𝕟𝕔𝕚𝕟𝕘 𝕀𝕟𝕤𝕥𝕒𝕝𝕝𝕒𝕥𝕚𝕠𝕟</h1>
	  </div>
	  <div>
		<img class="pic1" src={work2}></img>
		<div class="foote">
		They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.
		</div>
	  </div>
	  
    </div>

    <div class="first col">
	<div class="head bg-black">
      <h1>ℙ𝕝𝕒𝕚𝕟 ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work4}></img>
		<div class="footer2">
		Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement.
		</div>
	  </div>
    </div>
    <div class="first col">
	<div class="head bg-black">
      <h1>𝔸𝕣𝕥𝕚𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕒𝕤𝕤</h1>
	  </div>
	  <div>
		<img class="pic1" src={work5}></img>
		<div class="footer4">
		Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.
		</div>
	  </div>
    </div>
  </div> */}
  <div class="col-container">
  <div class="col">
  <div class="head bg-black">
      <h1>𝕊𝕥𝕒𝕞𝕡𝕖𝕕 ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work4}></img>
		<div class="footer1">
		The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.
		</div>
	  </div>
 
  </div>

  <div class="col">
  <div class="head bg-black">
      <h1>𝔼𝕦𝕣𝕠 𝕋𝕚𝕝𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work3}></img>
		<div class="footer3">
		Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.

		</div>
	  </div>
  </div>

  <div class="col">
  <div class="head bg-black">
      <h1>𝔸𝕣𝕥𝕚𝕗𝕚𝕔𝕚𝕒𝕝 𝔾𝕣𝕒𝕤𝕤</h1>
	  </div>
	  <div>
		<img class="pic1" src={work5}></img>
		<div class="footer4">
		Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.
		</div>
	  </div>
  </div>
</div>
<div class="col-container">
  <div class="col">
  <div class="head bg-black">
      <h1>𝔸𝕝𝕦𝕞𝕚𝕟𝕦𝕞 𝔽𝕖𝕟𝕔𝕚𝕟𝕘 𝕀𝕟𝕤𝕥𝕒𝕝𝕝𝕒𝕥𝕚𝕠𝕟</h1>
	  </div>
	  <div>
		<img class="pic1" src={work2}></img>
		<div class="foote">
		They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.
		</div>
	  </div>
 
  </div>

  <div class="col">
  <div class="head bg-black">
      <h1>ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖 ℙ𝕠𝕠𝕝 𝔻𝕖𝕔𝕜</h1>
	  </div>
	  <div>
	  <img class="pic1" src={pool}></img>
	  <div class="footer3">
		For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. 
			
		</div>
	  </div>
  </div>

  <div class="col">
  <div class="head bg-black">
      <h1>ℙ𝕝𝕒𝕚𝕟 ℂ𝕠𝕟𝕔𝕣𝕖𝕥𝕖</h1>
	  </div>
	  <div>
		<img class="pic1" src={work4}></img>
		<div class="footer2">
		Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement.
		</div>
	  </div>
  </div>
</div>
</div>

	);
};
