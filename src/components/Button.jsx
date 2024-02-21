import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';


const MyButton = ({addNumber}) => {
  return <button onClick={addNumber}>Add </button> // creates a button for clicking add 

}
export default MyButton;