import { Link } from "react-router-dom";
import Paul from './imgs/paul.jpg'

function Question3(){
    return(
    <>
    <h1>Paul drew this?</h1>
    <Link to="/incorrect">Yes</Link>
    <br></br>
    <Link to="/correct3">No way </Link>
    <br></br>
    <br></br>
    <img className='pic' src={Paul}></img>
    </>
    
)
}

export default Question3;

