import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Namepage() {
  const [name, setName] = useState(''); //returns a stateful value and a functin to update it, here i destrcutre the array that the function returns (like many react hooks do apparanrly) and name them (call the stateful value name
  const navigate = useNavigate(); //you gotta assign the hook. the hook returns the function, ,it is not the function itself for some reason

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/welcome', { state: { name } }); // This is how you make a stateful value a route state (some data something you pass on to next page.) Pass name as route state. auto connect to welcome route upon submission (through button click)
  };

  return (
    <div>
      <h1 >What's your name?</h1>
      <form className='big' onSubmit={handleSubmit}>
        <input
          type="text"
          value={name} //what becomes the name value (the stateful value you are handing on to next page)
          onChange={(e) => setName(e.target.value)} //whenever something is typed that becomes the new name value- that function updates it, so thats why it is used upon every change- because even after the first letter is typed, its now technically an update i guess
        />
        
        <button className='butt' type="submit">Enter</button> 
      
      </form>
    </div>
  );
}


export default Namepage;
