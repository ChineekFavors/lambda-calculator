import React from "react";
import Operations from "./Operators.js";


const OperatorButton = (props) => {

  return (

    <div>
    	<button className='operationButton'>{props.char}</button>
    	
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};
export default OperatorButton;