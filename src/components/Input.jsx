import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ userInput, setUserInput}) => {
    return (
        <>
            <input
                type="number"
                value={userInput}
                placeholder={'Enter your 10-digit Number'}
                onChange={event => {
                    setUserInput(event.target.value)
                   
                }}
            />
  
        </>

    )
}
export default Input;