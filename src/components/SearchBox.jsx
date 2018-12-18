import React from 'react';


function SearchBox(){
  let _label;

  function handleNewSearch(event) {
    event.preventDefault();
    console.log(_label.value);
    _label.value = '';
    return console.log("search sent")
  }

  return (
    <div className="search">
      <p>find music by:</p>
      <p>Record Label</p>
      <div>
        <form onSubmit={handleNewSearch}>
          <input type="text" className="input-field" placeholder="Enter Record Label"
            ref={(input) => {_label = input;}}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>

  );
};

export default SearchBox;
