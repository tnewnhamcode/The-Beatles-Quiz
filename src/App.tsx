import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Quiz from './Quiz' 
import Correct from './Correct'
import Question2 from './Question2'
import Question3 from './Question3'
import Correct2 from './Correct2'
import Correct3 from './Correct3'
import Incorrect from './Incorrect'  //path to the file (not the url!)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Namepage from './Namepage'
import Welcome from './Welcome'
import Exclamations from "./FallingExclamations";
import TestFall from "./TestFall";
import "./index.css";
import Badani from './Badani';
import Question4 from './Question4';
import Question5 from './Question5'
import Correct4 from './Correct4'
import Correct5 from './Correct5'
import Question6 from './Question6'
import VictoryPage from './victorypage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/incorrect"  element={<Incorrect />} />
        <Route path="/correct" element={<Correct />} />
        <Route path="/question2" element={<Question2 />} />
         <Route path="/correct" element={<Correct />} />
        <Route path="/correct2" element={<Correct2 />} />
         <Route path="/question3" element={<Question3 />} />
         <Route path="/correct3" element={<Correct3 />} />
          <Route path="/namepage" element={<Namepage />} />
          <Route path="/welcome" element= {<Welcome/>} />
          <Route path="/exclamations" element= {<Exclamations/>} />
          <Route path="/testfall" element= {<TestFall/>} />
          <Route path ="/badani" element={<Badani/>}/>
           <Route path ="/question4" element={<Question4/>}/>
           <Route path="/correct4" element={<Correct4/>}/>
           <Route path ="/question5" element={<Question5/>}/>
           <Route path ="/correct5" element={<Correct5/>}/>
           <Route path ="/question6" element={<Question6/>}/>
           <Route path ="/victorypage" element={<VictoryPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
function App() {
  return (
  <div className='divv'>
  


      <Link to="/namepage" className="biggun">The Beatles Quiz</Link>
   </div>
  )
}

export default App


