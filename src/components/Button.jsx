import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';


const MyButton = ({addNumber}) => {
  return <button onClick={addNumber}>Add </button>

}
export default MyButton;