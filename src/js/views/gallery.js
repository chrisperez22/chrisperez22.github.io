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
  
  <img className="myImg" src={nine}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={ten}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={elleven}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={twelve}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={thirteen}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={fourteen}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={fifteen}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  <img className="myImg" src={sixteen}></img>
  <div className="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div className="caption">gggggg</div>
  </div>

  



  </div>



			{/* <br />
			<Link to="/">
				<button className="btn btn-primary">Back </button>
			</Link> */}
		</div>
	);
};
