import { Link } from "react-router-dom";
import rango from "./imgs.rango.jpg"

function Question4(){
    return(
    <div>
     <h1>Ringo wears many rings? </h1> 
    <Link to="/correct4">yes</Link>
    <br></br>
    <Link to="/incorrect">number 9</Link>
        <img src={rango}/>
    </div>
)
}

export default Question4;


