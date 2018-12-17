import React from 'react';
import '../index.css';

function Header(){
  const headerStyles = {
    borderBottom: '1px solid grey'
  };
  return(
    <div style={headerStyles}>
      <h1>Discogs Jukebox</h1>
    </div>
  )
}

export default Header;
