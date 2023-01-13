import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import one from "../../img/texture.jpg"
import two from "../../img/grass.jpg"
import three from "../../img/yard.jpg"
import four from "../../img/back2.jpg"
import five from "../../img/slidetwo.jpg"
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
import sixteen from "../../img/euro.jpg"
import seventeen from "../../img/pink.jpg"
import eighteen from "../../img/marble1.jpg"
import nineteen from "../../img/guy3.jpg"
import twenty from "../../img/long3.jpg"
import twentyone from "../../img/mansion.jpg"
import twentytwo from "../../img/nie5.jpg"
import twentythree from "../../img/plain2.jpg"
import twentyfour from "../../img/valid.jpg"
import twentyfive from "../../img/pooldeck.jpg"
import twentysix from "../../img/fence.jpg"
import twentyseven from "../../img/progress.jpg"
import twentyeight from "../../img/plain4.jpg"
import twentynine from "../../img/very2.jpg"

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

<div class="gallery__images-item six">
  <a href="#6" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={six} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item seven">
  <a href="#7" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={seven} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item eight">
  <a href="#8" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={eight} class="gallery__images-small" />
  </a>
</div>

<div class="gallery__images-item nine">
  <a href="#9" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={nine} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item ten">
  <a href="#10" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={ten} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item elleven">
  <a href="#11" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={elleven} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twelve">
  <a href="#12" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twelve} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item thirteen">
  <a href="#13" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={thirteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item fourteen">
  <a href="#14" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={fourteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item fifteen">
  <a href="#15" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={fifteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item sixteen">
  <a href="#16" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={sixteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item seventeen">
  <a href="#17" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={seventeen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item eightteen">
  <a href="#18" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={eighteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item nineteen">
  <a href="#19" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={nineteen} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twenty">
  <a href="#20" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twenty} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentyone">
  <a href="#21" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentyone} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentytwo">
  <a href="#22" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentytwo} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentythree">
  <a href="#23" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentythree} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentyfour">
  <a href="#24" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentyfour} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentyfive">
  <a href="#25" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentyfive} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentysix">
  <a href="#26" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentysix} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentyseven">
  <a href="#27" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentyseven} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentyeight">
  <a href="#28" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentyeight} class="gallery__images-small" />
  </a>
</div>
<div class="gallery__images-item twentynine">
  <a href="#29" class="gallery__images-link">
    {/* <span class="overlay"></span> */}
    <img src={twentynine} class="gallery__images-small" />
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

<div class="gallery__lightbox" id="6">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={six} class="gallery__lightbox-image" />
    <a href="#5" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#7" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="7">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={seven} class="gallery__lightbox-image" />
    <a href="#6" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#8" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="8">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={eight} class="gallery__lightbox-image" />
    <a href="#7" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#9" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="9">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={nine} class="gallery__lightbox-image" />
    <a href="#8" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#10" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="10">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={ten} class="gallery__lightbox-image" />
    <a href="#9" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#11" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="11">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={elleven} class="gallery__lightbox-image" />
    <a href="#10" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#12" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="12">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twelve} class="gallery__lightbox-image" />
    <a href="#11" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#13" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="13">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={thirteen} class="gallery__lightbox-image" />
    <a href="#12" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#14" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="14">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={fourteen} class="gallery__lightbox-image" />
    <a href="#13" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#15" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="15">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={fifteen} class="gallery__lightbox-image" />
    <a href="#14" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#16" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>

<div class="gallery__lightbox" id="16">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={sixteen} class="gallery__lightbox-image" />
    <a href="#15" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#17" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="17">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={seventeen} class="gallery__lightbox-image" />
    <a href="#16" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#18" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="18">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={eighteen} class="gallery__lightbox-image" />
    <a href="#17" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#19" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="19">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={nineteen} class="gallery__lightbox-image" />
    <a href="#18" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#20" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="20">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twenty} class="gallery__lightbox-image" />
    <a href="#19" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#21" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="21">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentyone} class="gallery__lightbox-image" />
    <a href="#20" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#22" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="22">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentytwo} class="gallery__lightbox-image" />
    <a href="#21" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#23" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="23">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentythree} class="gallery__lightbox-image" />
    <a href="#22" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#24" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="24">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentyfour} class="gallery__lightbox-image" />
    <a href="#23" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#25" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="25">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentyfive} class="gallery__lightbox-image" />
    <a href="#24" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#26" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="26">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentysix} class="gallery__lightbox-image" />
    <a href="#25" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#27" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="27">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentyseven} class="gallery__lightbox-image" />
    <a href="#26" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#28" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="28">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentyeight} class="gallery__lightbox-image" />
    <a href="#27" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#29" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>
<div class="gallery__lightbox" id="29">
  <div class="gallery__lightbox-content">
    <a href="#" class="close">
      ×
    </a>
    <img src={twentynine} class="gallery__lightbox-image" />
    <a href="#29" class="back">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#30" class="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</div>


</div>
      </div>
	);
};
