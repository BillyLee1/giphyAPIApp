import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function fetchGiph(userSearch) {
  let request = new XMLHttpRequest();
  const url = `api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${process.env.API_KEY}`

  request.addEventListener('loadend', function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      console.log(response.data[2]);
    }
  });

  request.open("GET", url, true);
  request.send();

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
