import React, { Component } from "react";
import "../../styles/footer.css";
import {FaTruck} from "react-icons/fa"
import {FaClock} from "react-icons/fa"
import {FaPhoneAlt} from "react-icons/fa"
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-black">
            {/* <div class="foot container text-center"> */}
  <div class="row">
    <div class="col">
    <h2><FaTruck color="white" size={25}/></h2>
     <p2>SERVICE AREA <br></br>Miami, FL</p2>
    </div>
    <div class="col">
      <h2><FaClock color="white" size={25}/></h2>
    <p2>HOURS <br></br>
Mon - Fri
7:00 am - 7:00 pm <br></br>
Sat 
7:00 am - 7:00 pm  <br></br>
Sun
1:00 pm - 6:00 pm
</p2>

    </div>
    <div class="col">
    <h2><FaPhoneAlt color="white" size={25}/></h2>
    <p2>CONTACT US <br></br>
Main: (786) 296-4730 <br></br>
Email: Mariovilchez08@icloud.com</p2>
    </div>
  </div>
{/* </div> */}
        
	</footer>
);
