import { Link } from "react-router-dom";
//const is like saying read only apparantly, unchangable la
function Quiz(){
  
   //accessing the name property in the state object and calling it playerName
   //saying or nothing basically la, incase theres nothing in there so it dont crash.. idk
return(
<div classname=nonhomescreen>
  
<h1>George Harrison played the sitar? </h1>
<Link to="/correct">Yes</Link>
<br></br>
 <Link to="/incorrect">No</Link>
</div>
)
}


export default Quiz;

