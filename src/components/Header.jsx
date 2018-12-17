import React from 'react';
import '../index.css';

function Header(){
  const headerStyles = {
    minHeight: '1.5em',
    textAlign: 'center',
  };
  return(
    <div style={headerStyles} className="header">
      <p>Discogs Jukebox</p>
    </div>
  )
}

export default Header;
