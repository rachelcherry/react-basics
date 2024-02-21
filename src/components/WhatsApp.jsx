import React from 'react';

const WhatsApp = ({setNumbersList, numbersList}) => {
  function handleWAClick() {
    const number = prompt('Please enter a phone number to be used for notification by whatsapp:');
    if (number) {
      if (number.length === 10 && /^\d+$/.test(number)) {
         // James says it's okay to do this rather than the (prevValue, props) construction
        setNumbersList([...numbersList, number])
        alert('Thank you! We will notify you at ' + number + ' when Spark! BookPals is ready for WhatsApp')
      }
      else {
        alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
      }
    }
    else {
      alert("You didn't enter a valid 10 digit number. Please try again if you wish to be notified.");
    }
  }

  return (
    <>
      <div className="cta">
        <h1>Want to try it out?</h1>
        <button onClick={handleWAClick}>
          <img
            src={'whatsapp.svg'}
          />
          Join for WhatsApp</button>
      </div>
    </>
  )
}
export default WhatsApp;