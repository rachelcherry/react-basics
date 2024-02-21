import { useState } from 'react';
import React from 'react';
import NavBar from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/NavBar.jsx';
import Footer from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Footer.jsx';
import Input from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Input.jsx';
import WhatsApp from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/WhatsApp.jsx';
//import {Footer} from "/Users/rachelcherry/hw3-react-rachelcherry/src/components/Footer.jsx";
//import { Link } from 'react-router-dom';
export function Home() {
  const [userInput, setUserInput] = useState(""); // state for getting user input
  const [numbersList, setNumbersList] = useState([]); // state for the list that contains the users numbers 
  const [error, setError] = useState(false); // state for keeping track of whether or not it is a valid input
  
  function handleAddNumber() {
    if (userInput.length === 10 && /^\d+$/.test(userInput)) { // if the input length is 10 and it is a valid number
      setNumbersList([...numbersList, userInput]) // set the list of numbers to be what it previously was and add the new user input
      setUserInput("") // set the user input to be empty
      setError(false) // set the error to be false because it is a valid number
    } else {
      setError(true) // there was no valid number given
    }
  }
 

  return (
   
    <div>
      <NavBar /> {/* calls the NavBar component */}
      <br></br>
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community. BU students and affiliates can connect with each other to share book recommendations, start in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity, among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications wherever a book you may be interested in is discussed</p>
      </div>
      <br></br>
      <div>
        <Input userInput={userInput} setUserInput={setUserInput} error={error} /> {/* calls the input component with the following properties*/}
        <button onClick={handleAddNumber}>Add </button> {/* calls handleAddNumber function which adds the number to the list if it is valid */}
        <div className ="error"> 
    {error && <p>Please enter a valid 10 digit phone number.</p>} {/* show the error below the sign up box*/}
  </div>
        <div>
        <br></br>
          <h2>Users who have signed up!</h2>
          <ul>
            {numbersList.map((v, i) => (
              <li key={i}>{v}</li>
            ))} {/* maps the users input to the list and adds the value to the list. This also displays the list on the screen*/}

          </ul>

        </div>
        <WhatsApp setNumbersList={setNumbersList} numbersList={numbersList}/> {/* calls the WhatsApp component with the following properties*/}
        <br></br>
        <Footer /> {/* calls the Footer component */}
      </div> 
    </div>
  )
}