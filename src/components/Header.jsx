import React from 'react';

function Header() {
  var headerStyles = {
    backgroundColor: 'cornflowerblue',
    marginTop: '50'
  };

  var pStyles = {
    fontSize: '50',
    fontWeight: 'bolder'
  };

  return (
    <div style={headerStyles}>
      <h1>Help Queue!!!!</h1>
      <p style={pStyles}>Tester Line</p>
    </div>

  );
}

export default Header;