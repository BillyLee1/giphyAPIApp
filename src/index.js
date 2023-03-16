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
  let image3 = document.querySelector('#pic3');
  let image4 = document.querySelector('#pic4');
  let image5 = document.querySelector('#pic5');
  let image6 = document.querySelector('#pic6');
  image.setAttribute("src", `${apiResponse.data[0].images.downsized_medium.url}`);
  image.setAttribute("alt", `${apiResponse.data[0].title}`);
  image2.setAttribute("src", `${apiResponse.data[2].images.downsized_medium.url}`);
  image2.setAttribute("alt", `${apiResponse.data[2].title}`);
  image3.setAttribute("src", `${apiResponse.data[3].images.downsized_medium.url}`);
  image3.setAttribute("alt", `${apiResponse.data[3].title}`);
  image4.setAttribute("src", `${apiResponse.data[4].images.downsized_medium.url}`);
  image4.setAttribute("alt", `${apiResponse.data[4].title}`);
  image5.setAttribute("src", `${apiResponse.data[5].images.downsized_medium.url}`);
  image5.setAttribute("alt", `${apiResponse.data[5].title}`);
  image6.setAttribute("src", `${apiResponse.data[6].images.downsized_medium.url}`);
  image6.setAttribute("alt", `${apiResponse.data[6].title}`);
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
