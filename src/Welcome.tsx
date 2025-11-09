import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Welcome() {
const thang=useLocation();
const {name}=thang.state || {};
//add an if thing for secret page. like if name is jaborni then show this component instead
return(
    <>
         <h1> {name}, are you ready to quiz? </h1> 
         <Link to='/incorrect'>No!</Link>
         <br></br>
         <Link to='/quiz'>Yes.. Yes</Link>
    </>
);
}
export default Welcome;