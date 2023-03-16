import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function fetchGiph(userSearch) {
  let request = new XMLHttpRequest();
  const url = `http://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${process.env.API_KEY}`

  request.addEventListener('loadend', function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      displayPic(response);
    }
  });

  request.open("GET", url, true);
  request.send();

}

function displayPic(apiResponse) {
  let image = document.querySelector('#pic');
  let image2 = document.querySelector('#pic2');
  image.setAttribute("src", `${apiResponse.data[0].images.original.url}`);
  image.setAttribute("alt", `${apiResponse.data[0].title}`);
  image2.setAttribute("src", `${apiResponse.data[2].images.original.url}`);
  image2.setAttribute("alt", `${apiResponse.data[2].title}`);
}

function handleFormSubmission(event) {
  event.preventDefault();
  let userSearch = document.querySelector("#search").value;
  document.querySelector("#search").value = null;
  fetchGiph(userSearch);
}

window.addEventListener("load", function() {
  let search = document.querySelector('form');
  search.addEventListener("submit", handleFormSubmission)
});
