import React from 'react';
import PropTypes from 'prop-types';


const MyButton = ({addNumber}) => {
  return <button onClick={addNumber}>Add </button> // creates a button for clicking add 

}
MyButton.propTypes = {
  addNumber: PropTypes.func.isRequired,
};
export default MyButton;