import { Link } from "react-router-dom";
import TestFall from "./TestFall";
function Correct5(){
    return(
    <div>
        <TestFall></TestFall>
    <h1>Nice one!</h1>
    <Link to="/question6">Next question</Link>
    </div>
    )
}

export default Correct5;