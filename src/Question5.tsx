import { Link } from "react-router-dom";
import {useState} from "react";
import breakup from "./imgs/breakup.jpg"

function Question5(){
   const [answer, setAnswer]= useState("");
    return(
    <div >
    
    <form>
        <h1>When did the Beatles officially breakup</h1>
        <label> <input type="radio" value="1653" checked={answer==="1653"} //js goes in braces la
         onChange={(e)=>setAnswer(e.target.value)}></input>1969 </label>
        <br></br>
         <label> <input type="radio" value="brr" 
         checked={answer==="brr"} onChange={(e)=>setAnswer  //this state function puts it the value in a state so that when it rerenders to put a dot in, it can remember what the value is and therefore check the box
         (e.target.value)}></input>1971</label> 
        <br></br>                  
        <br></br>
        {answer==="1653"?(
        <Link to='/Correct5'>
        <button type="submit"> Confirm </button>
        </Link>
        ):<Link to='/Incorrect'>
        <button type="submit"> Confirm </button>
        </Link>}
        
    </form>
       <br></br>
       <br></br>
       <img src={breakup}/>
    </div>
)
}

export default Question5;



