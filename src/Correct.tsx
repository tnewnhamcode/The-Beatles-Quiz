import { Link } from "react-router-dom";
import TestFall from "./TestFall";
function Correct(){
    return(
    <div>
        <TestFall></TestFall>
        
    <h1>Correct!</h1>
    <Link to="/question2">Next question</Link>

    </div>
    )
}

export default Correct;