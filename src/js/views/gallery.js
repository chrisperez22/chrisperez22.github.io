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
	const { store, actions } = useContext(Context);
    const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);

	return (
		<div className="container">
			
            <div class="gallery-container">
    <div class="gallery-item" data-index="1">
        <img src={one}/>
    </div>
    <div class="gallery-item" data-index="2">
        <img src={two}/>
    </div>
    <div class="gallery-item" data-index="3">
        <img src={three}/>
    </div>
    <div class="gallery-item" data-index="4">
        <img src={four}/>
    </div>
    <div class="gallery-item" data-index="5">
        <img src={five}/>
    </div>
    <div class="gallery-item" data-index="6">
        <img src={six}/>
    </div>
    <div class="gallery-item" data-index="7">
        <img src={seven}/>
    </div>
    <div class="gallery-item" data-index="8">
        <img src={eight}/>
    </div>
    <div class="gallery-item" data-index="9">
        <img src={nine}/>
    </div>
    <div class="gallery-item" data-index="10">
        <img src={ten}/>
    </div>
    <div class="gallery-item" data-index="11">
        <img src={elleven}/>
    </div>
    <div class="gallery-item" data-index="12">
        <img src={twelve}/>
    </div>
    <div class="gallery-item" data-index="13">
        <img src={thirteen}/>
    </div>
    <div class="gallery-item" data-index="14">
        <img src={fourteen}/>
    </div>
    <div class="gallery-item" data-index="15">
        <img src={fifteen}/>
    </div>
</div>

			{/* <br />
			<Link to="/">
				<button className="btn btn-primary">Back </button>
			</Link> */}
		</div>
	);
};
