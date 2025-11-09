import { Link } from "react-router-dom";
import TestFall from "./TestFall";
import Troph from './imgs/troph.jpg';

function VictoryPage(){
    return(
    <div className="victory">
        <TestFall></TestFall>
    <h1>YOU beat the quiz! Here is your trophy, don't drop it </h1>
    <Link to="/">Home</Link>
    <br></br>
    <br></br>
    <img src={Troph} ></img>
    </div>
    )
}

export default VictoryPage;