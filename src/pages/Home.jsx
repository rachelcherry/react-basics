import { useState } from 'react';
import React from 'react';
import NavBar from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/NavBar.jsx';
import Footer from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Footer.jsx';
import Input from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Input.jsx';
import WhatsApp from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/WhatsApp.jsx';
//import {Footer} from "/Users/rachelcherry/hw3-react-rachelcherry/src/components/Footer.jsx";
//import { Link } from 'react-router-dom';
export function Home() {
  const [userInput, setUserInput] = useState("");
  const [numbersList, setNumbersList] = useState([]);
  
  function handleAddNumber() {
    if (userInput.length === 10 && /^\d+$/.test(userInput)) {
      // James says it's okay to do this rather than the (prevValue, props) construction
      setNumbersList([...numbersList, userInput])
      setUserInput("")
    }
    else {
      console.log("User didn't input a valid number.")
    }

  }
  return (
    <div>
      <NavBar />
      <br></br>
      <div>
        <h1> Welcome to Spark! BookPals</h1>
        <p>Spark! BookPals is a revolutionary platform for Boston University's community. BU students and affiliates can connect with each other to share book recommendations, start in-depth discussions, and more! Our unique features allow users to filter books based on genres and complexity, among other things. Stay up-to-date through SMS, Signal, and whatsapp notifications wherever a book you may be interested in is discussed</p>
      </div>
      <br></br>
      <div>
        <Input userInput={userInput} setUserInput={setUserInput} />
        <button onClick={handleAddNumber}>Add </button>
        <div>
          <h2>Users who have signed up!</h2>
          <ul>
            {numbersList.map((v, i) => (
              <li key={i}>{v}</li>
            ))}

          </ul>

        </div>
        <WhatsApp setNumbersList={setNumbersList}/>
        <Footer />
      </div>
    </div>
  )
}
