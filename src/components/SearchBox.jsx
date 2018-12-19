import React from 'react';
import { fetchLabelReleases } from './../actions';
import { connect } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
// import thunk from 'redux-thunk';

function SearchBox( {dispatch }){
  let _label;
  // debugger
  SearchBox.propTypes = {
    dispatch: PropTypes.func
  };

  function handleNewSearch(event) {
    event.preventDefault();
    console.log(_label.value);
    _label.value = '';
    // return console.log("search sent")
  }

  return (
    <div className="search">
      <h3>find music by:</h3>
      <h3>Record Label</h3>
      <div>
        <form onSubmit={e => {
          let input = _label;
          console.log(input.value.trim());
          console.log('SEARCHED RELEASE:');
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchLabelReleases(input.value.trim()));
          input.value = '';
        }}>
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


export default connect()(SearchBox);
