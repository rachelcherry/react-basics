import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ userInput, setUserInput}) => {
    return (
        <>
            <input 
                type="number"
                value={userInput} // sets the value to be the user input
                placeholder={'Enter your 10-digit Number'} // text in the text box
                onChange={event => {
                    setUserInput(event.target.value) // this input function sets the value type to be a number and sets the value to be user input. It then takes the input from the user and sets it using setUserInput
                   
                }}

        
            />
  
        </>

    )
}
export default Input;