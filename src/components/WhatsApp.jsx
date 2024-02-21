import React from 'react';
import PropTypes from 'prop-types';

const WhatsApp = ({setNumbersList, numbersList}) => {
  function handleWAClick() {
    const number = prompt('Please enter a phone number to be used for notification by whatsapp:'); // asks the user for a value in a pop up 
    if (number) { // if the user input a number 
      if (number.length === 10 && /^\d+$/.test(number)) { // if the number is size 10 and is a valid number 
         // James says it's okay to do this rather than the (prevValue, props) construction
        setNumbersList([...numbersList, number]) // add the number to the list 
        alert('Thank you! We will notify you at ' + number + ' when Spark! BookPals is ready for WhatsApp') // send an alert that they answered properly 
      }
      else {
        alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified."); // alert them in a pop up that they did not input a valid number 
      }
    }
  }

  return (
    <>
      <div className="cta">
        <h1>Want to try it out?</h1>
        <button onClick={handleWAClick}> {/* calls the click function above */}
          <img
            src={'whatsapp.svg'}
          />
          Join for WhatsApp</button> {/* creates button for asking the user for their whatsapp number */}
      </div>
    </>
  )
}
WhatsApp.propTypes = {
  numbersList: PropTypes.array.isRequired,
  setNumbersList: PropTypes.func.isRequired,
};
export default WhatsApp;