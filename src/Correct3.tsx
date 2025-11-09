import { useEffect } from "react";
import { Link } from "react-router-dom";
import TestFall from "./TestFall";

function Correct3() {
  // Run TestFall once when the component mounts


  return (
   
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <TestFall></TestFall>
      <h1>Correct!</h1>
      <Link to="/question4">Next question</Link>
    </div>
  );
}

export default Correct3;
