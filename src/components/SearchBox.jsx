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

// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.discogs.com/database/search?q=hyperdub&label=&token=UwNbuUELkfonxrpLhqkxgzTljgcyWXKpCdQFpqYq",
//   "method": "GET",
//   "headers": {
//     "Cache-Control": "no-cache",
//     "Postman-Token": "0767f92b-5b25-5c22-b03e-57bac285df16"
//   }
// }
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


export default SearchBox;
