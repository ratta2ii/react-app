import React from "react";

export default function LeftBox(){
  var leftBoxStyles = {
      backgroundColor: 'salmon',
      marginTop: '50',
      width: '30%',
      marginLeft: '50px',
      padding: '50'
  } 
  
  var pStyles = {
      fontSize: '50',
      fontWeight: 'bolder'
  }

  return (
    <div style={leftBoxStyles}>
        <h1>Help Queue!!!!</h1>
        <p style={pStyles}>Tester Line</p>
    </div>  
    
  );
}
