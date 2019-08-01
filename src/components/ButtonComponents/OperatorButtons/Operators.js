import React, {useState} from "react";

//import any components needed
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton";


//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperators] = useState(operators);
  
  return (
    <div className='operatorbuttons'>
       {operator.map( ope => 
        <OperatorButton  key={ope['char']} char={ope['char']} value={ope['value']} />

        )}
    	
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;