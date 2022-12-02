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
import { Context } from "../store/appContext";

import "../../styles/gallery.css";

export const Gallery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
  <div className="hello">

  <img className="myImg" src={one}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>
  
  <img className="myImg" src={two}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={three}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={four}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={five}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={six}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={seven}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={eight}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>
  



  </div>



			<br />
			<Link to="/">
				<button className="btn btn-primary">Back </button>
			</Link>
		</div>
	);
};
