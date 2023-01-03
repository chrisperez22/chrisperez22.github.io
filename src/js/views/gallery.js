import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import one from "../../img/texture.jpg"
import two from "../../img/grass.jpg"
import three from "../../img/yard.jpg"
import four from "../../img/back2.jpg"
import five from "../../img/bighouse.jpg"
import six from "../../img/cars.jpg"
import seven from "../../img/mid.jpg"
import eight from "../../img/side.jpg"
import nine from "../../img/caution.jpg"
import ten from "../../img/favorite.jpg"
import elleven from "../../img/favorite2.jpg"
import twelve from "../../img/goodjob.jpg"
import thirteen from "../../img/goodpic.jpg"
import fourteen from "../../img/greyjob.jpg"
import fifteen from "../../img/messy.jpg"
import sixteen from "../../img/straight.jpg"
import { Context } from "../store/appContext";

import "../../styles/gallery.css";

export const Gallery = () => {
   
	return (
         
        <div>
       <div class="gallery">


<div class="gallery__images-item one">
  <a href="#1" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={one} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item two">
  <a href="#2" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={two} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item three">
  <a href="#3" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={three} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item four">
  <a href="#4" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={four} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item five">
  <a href="#5" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={five} class="gallery__images-small" />
  </a>
</div>




<div class="gallery__lightbox" id="1">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={one} class="gallery__lightbox-image" />
    <a href="#2" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="2">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={two} class="gallery__lightbox-image" />
    <a href="#1" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#3" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="3">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={three} class="gallery__lightbox-image" />
    <a href="#2" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#4" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="4">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={four} class="gallery__lightbox-image" />
    <a href="#3" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#5" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="5">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={five} class="gallery__lightbox-image" />
    <a href="#4" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#6" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>


</div>
      </div>
	);
};
