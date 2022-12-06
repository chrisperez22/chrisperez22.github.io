
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import sone from "../../img/greyjob.jpg"
import stwo from "../../img/favorite2.jpg"
import sthree from "../../img/favorite.jpg"
import backtwo from "../../img/back2.jpg"
import sfive from "../../img/texture.jpg"
import check from "../../img/checkmark.jpg"

import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => (
  <div className="every bg-light">
	<div className="slide">
		<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="slideshow"src={sthree} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="slideshow"src={sone} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="slideshow"src={backtwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="slideshow"src={stwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img id="slideshow"src={sfive} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
	</div>

{/* // under slideshow// */}
<br></br>
<div class="ser">
<div class="services">
<h3>𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h3>
</div> 


<div class="row">
<div class="col-4">

<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝙎𝙩𝙖𝙢𝙥𝙚𝙙 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h5>


  <p1 id="service">Stamped concrete is frequently used for pool decks, patios, and driveways. The appealing and long-lasting alternative to conventional concrete is stamped concrete. Because it can produce a distinctive and fashionable look that is also long-lasting and simple to maintain.</p1>
</div>
<div class="col-4">
<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 𝙋𝙤𝙤𝙡 𝘿𝙚𝙘𝙠</h5>
  <p1 id="service">
  For a pool deck, concrete is a fantastic material because it is sturdy and long-lasting. With the right care and maintenance, concrete can last for many years. Your pool deck can also be made more interesting and beautiful by stamping concrete.  A concrete contractor will be able to install your deck effectively and assist you in selecting the best material.
</p1>
</div>
<div class="col-4">

<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝘼𝙡𝙪𝙢𝙞𝙣𝙪𝙢 𝙁𝙚𝙣𝙘𝙞𝙣𝙜 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙖𝙩𝙞𝙤𝙣  </h5>
  <p1 id="service">They are durable, easy to install, maintenance free and an affordable fencing solution for every property. Above all, when installed correctly they look great and enhance the style of your property.</p1>
</div>
<div class="col-4">
<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝙋𝙡𝙖𝙞𝙣 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </h5>
  <p1 id="service">Plain concrete is most commonly used for paving and flooring. Made from a mix of cement, aggregate, and water the different types of aggregate and ratio of materials used will give different types of cement with slightly different properties.</p1>
</div>
<div class="col-4">
<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝙀𝙪𝙧𝙤 𝙏𝙞𝙡𝙚</h5>
  <p1 id="service">Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.</p1>
</div>
<div class="col-4">
<h5><img class="mark"src={check}></img>&nbsp; &nbsp;&nbsp;𝙎𝙞𝙙𝙚𝙬𝙖𝙡𝙠</h5>
  <p1 id="service"></p1>
</div>
</div>

</div>





<form class="contact row g-3 bg-light">
  <h1>Get in Contact with us for a FREE estimate !</h1>
  <div class="col-md-4">
    <label for="inputName4" class="form-label"></label>
    <input type="name" class="form-control" id="inputName4" placeholder="Name:"/>
  </div>
  <div class="col-md-4">
    <label for="inputPhone4" class="form-label"></label>
    <input type="phone" class="form-control" id="inputPhone4" placeholder="Phone:"/>
  </div>
  <div class="col-md-4">
    <label for="inputEmail" class="form-label"></label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Email:"/>
  </div>
  
  <div class="message col-12">
    <label for="inputMessage2" class="form-label"></label>
    <input type="text" class="form-control" id="inputMessage2" placeholder="Message:"/>
  </div>
  <br></br> <br></br> <br></br> <br></br> <br></br>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Send</button>
  </div>
  
  </form>
  <br></br><br></br><br></br><br></br><br></br><br></br>


</div>

	
);
