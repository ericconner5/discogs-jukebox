import React from 'react';


function SearchBox(){
  let _label;

  return (
    <div className="search">
      <p>find music by:</p>
      <p>Record Label</p>
      <div>
        <input type="text" className="input-field" placeholder="Enter Record Label"
          ref={(input) => {_label = input;}}></input>
        <button type="submit"><i class="submit-search"></i>Search</button>
      </div>
    </div>

  );
};

export default SearchBox;
