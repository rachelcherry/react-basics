import { Link } from 'react-router-dom';
import React from 'react';
const MyButton = () => {
    const [list, setList] = useState([]);
    function handleClick(){
      <h3> {error} </h3>
      if(state.length == 10 && /^\d+$/.test(state)) {
        setList([...list, state]);
        setState("");
        alert('Thank you! We will notify you at ' + state + ' when Spark! BookPals is ready for WhatsApp')
       // alert('Thank you! We will notify' + {state} + 'when Spark! BookPals is ready for WhatsApp')
      } else {
        alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
      }
    }
    
    return (
      <button onClick={handleClick}>Add</button>
    )
    }
export default MyButton;