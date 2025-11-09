import { Link } from "react-router-dom";
import TestFall from "./TestFall";
function Correct2(){
    return(
    <div>
        <TestFall></TestFall>
    <h1>You got it right! :D </h1>
    <Link to="/question3">Next question</Link>
    </div>
    )
}

export default Correct2;