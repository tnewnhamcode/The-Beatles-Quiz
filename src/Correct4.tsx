import { Link } from "react-router-dom";
import TestFall from "./TestFall";
function Correct4(){
    return(
    <div>
        <TestFall></TestFall>
    <h1>That's right!</h1>
    <Link to="/question5">Next question</Link>
    </div>
    )
}

export default Correct4;