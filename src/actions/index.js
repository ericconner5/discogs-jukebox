import types from './constants';

export const addLabel = (label, id) => {
  type: types.ADD_LABEL,
  label,
  id
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
