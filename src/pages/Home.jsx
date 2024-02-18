import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Home() {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  function MyButton() {
  function handleClick(){
    <h3> {error} </h3>
    if(state.length == 10 && /^\d+$/.test(state)) {
      setList([...list, state]);
      setState("");
    } else {
      alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
    }
  }
  
  return (
    <button onClick={handleClick}>Add</button>
  )
  }
  return (
    <div>
      <div>
      <Link to="/about">About Page</Link>
      </div>
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community. BU students and affiliates can connect with each other to share book recommendations, start in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity, among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications wherever a book you may be interested in is disussed</p>
      </div>
      <div>
        <h2>Sign up</h2>
        <p>Sign up for notifications</p>
        
        <input
          type= "number"
          value={state}
          placeholder={'Enter your 10-digit Number'}
          onChange={event => {
            setState(event.target.value)
            if(state.length == 10 && /^\d+$/.test(state)) {
              setError(false);
            }
            else{
              setError(true)
            }
          }}
          />
          <MyButton />
          <p>Please enter a valid 10-digit</p>
   
          </div>
            <div>
              <h2>Users who have signed up!</h2>
              <ul>
              {list.map((list) => (
              <li>{list}</li>
              
       ))}    
       </ul>
             
        </div>
        <div>
        <footer>
        <p>&copy; 2024 Spark! BookPals. All rights reserved </p>
      </footer>
 </div>
   

</div>
    );}

