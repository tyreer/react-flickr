import axios from 'axios';
import ES6Promise from 'es6-promise';

// Polyfill for IE11
ES6Promise.polyfill();

function processResponse(response) {
  const firstBracket = response.data.indexOf('{');
  const returnedData = response.data.slice(firstBracket,(response.data.length-1));
  const returnedDataRegex = returnedData.replace(/'/g, "\'").replace(/\\'/g, "\'");
  const returnedJSON = JSON.parse(returnedDataRegex);
  return returnedJSON.items;
}

function handleError (error) {
  console.warn(error.name);
  return getFlickr('hopeitworks');
}

function getTag () {
  const miscTags = ['colorful', 'art', 'future', 'portland', 'london', 'dog', 'cat', 'potato']
  const index = Math.floor(Math.random() * 8);
  return miscTags[index];
}

export function getFlickr(query) {
  let getUrl;

  if (query === null) {
    const miscTag = getTag();
    getUrl = `https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=${miscTag}&tagmode=any&format=json`;
  } else {
    getUrl = `https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=${query}&tagmode=all&format=json`;
  }

  return axios.get(getUrl)
    .then(processResponse)
    .catch(handleError)
}
