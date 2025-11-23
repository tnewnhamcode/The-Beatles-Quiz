import { Link } from "react-router-dom";
import jahn from './imgs/jahn.avif';
function Question2(){
    return(
    <div>
    <h1>John Lennon sung 'Come Together'?</h1>
    <Link to="/correct2">Yes</Link>
    <br></br>
    <Link to="/incorrect">Nope</Link>
    <br></br>
    <br></br>
    <img src={jahn}></img>
    </div>
)
}

export default Question2;
