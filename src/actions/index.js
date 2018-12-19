// import types from './constants';
import * as types from './../constants/ActionTypes';

export const addLabel = (label) => ({
  type: types.ADD_LABEL,
  newLabel: label
});

export function fetchLabelReleases(label) {
  console.log(label);
  return function (dispatch) {
    label = label.replace(' ', '_');
    return fetch("https://api.discogs.com/database/search?q=" + label + "&label=&token=UwNbuUELkfonxrpLhqkxgzTljgcyWXKpCdQFpqYq").then(
      response => response.json(),
      error => console.log('An error occured in fetch.', error)
    ).then(function(json) {
      console.log('We have an api response here: ', json)
    });
  };
}


// var settings = {
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
