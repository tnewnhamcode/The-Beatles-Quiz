import { Link } from "react-router-dom";

function Question6(){
    return(
    <div className="nonhomescreen">
    <h1>Are you bored?</h1>
    <Link to="/victorypage">Yes</Link>
    <br></br>
    <Link to="/incorrect">Nope</Link>
    </div>
)
}
export default Question6;