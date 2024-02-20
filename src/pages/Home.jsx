import { useState } from 'react';
//import { Button } from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Button.jsx';
import  NavBar  from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/NavBar.jsx';
import { Button } from "/Users/rachelcherry/hw3-react-rachelcherry/src/components/Button.jsx";
//import { Link } from 'react-router-dom';
export function Home() {
  const [state, setState] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  return (
    <div>
<NavBar />
      <br></br>
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community. BU students and affiliates can connect with each other to share book recommendations, start in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity, among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications wherever a book you may be interested in is discussed</p>
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
          <div class='statement'>
            <Button />
          <p>Please enter a valid 10-digit phone number</p>
          </div>
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
 
 </div>
  <br></br>
 <footer>
        <span>&copy; 2024 Spark! BookPals. All rights reserved </span>
      </footer>
</div>
    );}

