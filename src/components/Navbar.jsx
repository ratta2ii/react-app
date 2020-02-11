import React from 'react';


export default function Navbar() {
  var navContainer = {
    padding: '10',
    marginBottom: '30'
  };

  var listElements = {
    float: 'left',
    fontSize: '20',
    border: '2px solid gray',
    color: 'gray',
    padding: '6',
    listStyleType: 'none'
  };

  var searchInputField = {
    float: 'right',
    padding: '10',
    width: '20%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20',
    textAlign: 'left',
    marginRight: '40',
    fontSize: '20'
  };

  var tweetInputField = {
    float: 'right',
    padding: '10',
    width: '8%',
    border: '2px solid DeepSkyBlue',
    borderRadius: '20',
    fontSize: '20'
  };

  return (
    <div style={navContainer}>
      <ul>
        <a><li style={listElements} >Home</li></a>
        <a><li style={listElements}>Notifications</li></a>
        <a><li style={listElements}>Messages</li></a>
      </ul>
      <input style={tweetInputField} type="submit" value="Tweet" />
      <input style={searchInputField} type="submit" value="Search Bar" />
      <br />
    </div>
  );
}

