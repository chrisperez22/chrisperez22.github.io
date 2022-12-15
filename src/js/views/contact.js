import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import chart from "../../img/chart.jpg"
import charta from "../../img/chart2.jpg"
import chartb from "../../img/chart3.jpg"
import chartc from "../../img/chart4.jpg"
import chartd from "../../img/chart5.jpg"
import { Context } from "../store/appContext";

import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="container">
		<form action="https://formspree.io/f/xyyaggpd" method="POST" class="contact row g-3 bg-light ">
      <h3>Get in Contact with us for a FREE estimate !</h3>
	  
	 
      <div class="col-md-4">
        <label for="inputName4" class="form-label"></label>
        <input
          type="name"
          class="form-control"
          name="Name"
          placeholder="Name:"
        />
      </div>
      <div class="col-md-4"> 
        <label for="inputPhone4" class="form-label"></label>
        <input
          type="phone"
          class="form-control"
          name="Phone"
          placeholder="Phone:"
        />
      </div>
      <div class="col-md-4">
        <label for="inputEmail" class="form-label"></label>
        <input
          type="email"
          class="form-control"
          name="Email"
          placeholder="Email:"
        />
      </div>
      <div class="message col-12">
       
       <textarea name="Message" placeholder="Message: " required></textarea>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <div class="col-12">
        <button class="btn-primary" type="submit">
          Send
        </button>
      </div>
    </form>
		
		</div>
	);
};
