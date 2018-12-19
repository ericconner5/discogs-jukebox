import React from 'react';
import './../App.css';
import './../fonts.css';

// import WebFont from 'webfontloader';

function Header(){
  // WebFont.load({
  //   custom: {
  //     families: ['BeautySchoolDropoutII'],
  //     urls: ['./../fonts/BEAUTYSC.TTF']
  //   }
  // });
  return(
    <div className="header">
      <p>Discogs Jukebox</p>
    </div>
  )
}

export default Header;
