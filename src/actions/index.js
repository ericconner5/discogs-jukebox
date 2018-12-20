import * as types from './../constants/ActionTypes';

export const addLabel = (label) => ({
  type: types.ADD_LABEL,
  newLabel: label
});

export function fetchLabelReleases(label) {
  label = label.replace(' ', '-');
  return function(dispatch) {
    console.log(`disp` + label);
    return fetch('https://api.discogs.com/database/search?q=' + label + '&label&type=release&token=UwNbuUELkfonxrpLhqkxgzTljgcyWXKpCdQFpqYq').then(
      response => response.json(),
      error => console.log('An error occured in fetch.', error)
    ).then(function(json) {
      console.log('We have an api response here: ', json)
      // let discogsSearchResult =
      // dispatch(addLabel(label));
    });
  };
}

// export function getUserStuff(query) {
//   const formattedQuery = query.split(' ', etc)
//   return function (dispatch) {
//     return fetch(`url`).then(response => response.json(),
//   error => console.log('fail'),
// ).then(function(geodata) {
//   if(geodata.results) {
//     const results = geodata.results[0].geometry.location;
//     dispatch(getUserGeo(results))
//   }
// })
//   }
// }
//
//
//
// filteredList.forEach((resortInFilteredList) => {
//   return fetch(`url${}`).then(response +> response.json(),
//   error => console.log('fail')
// ).then(function(resortData) {
//   if(resortData.id) {
//     console.log(liftStatusInput)
//     if(liftStatusInput === "open" && resortData.lifts.stats.percentage.closed !=== 100 && resortData.lifts.stats.percentage.scheduled !== 100){
//       x(dispatch)
//     } else if (liftStatusInput === "all") {
//       var x = fetchResortPlaces(resortData);
//       x(dispatch)
//     }
//   }
// });)
// })

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
