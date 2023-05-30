// TMDB DATA
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWU3YzY1MzNlYjhkNDBlNmI3OWM2ZmE2OWM1ZjEzZCIsInN1YiI6IjY0NzU1ZmE3YmJjYWUwMDBjMTQ0OTk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8nn4xrB61-s2UBt-t73Wpu1FUrI1vxL-JqK_V6wHAY'
  }
};
const arr = [];
const searchBtn = document.querySelector('#search-btn');
const section = document.querySelector('.card-list');

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {
    arr.push(data['results'])
    //console.log(arr)
    let rows = data['results'];

    rows.forEach(list => {
      let title = list.title;
      let overview = list.overview;
      let path = list.poster_path;
      let star = list.vote_average;
      let id = list.id;

      let temp_html = `<div class="movie-card" id="${id}" onclick="showAlert(this)">
                          <img class="movie-image" src="https://image.tmdb.org/t/p/w500${path}" alt="...">
                          <h2>${title}</h2>
                          <p>${overview}</p>
                          <p>Vote average ⭐${star}</p>
                        </div>`
      document.querySelector('.card-list').insertAdjacentHTML('beforeend',temp_html);
    });
  })

function showAlert(movieId) {
  let ids = movieId.id
  alert(`movie ID : ${ids}`)
}
// 검색기능
function searchMovie(event) {
  event.preventDefault();
  let text = document.querySelector('#search-input').value.trim();
  let reg = new RegExp(text, "i");
  let findMovies = [];

  arr[0].forEach((movie) => {
    if (reg.test(movie.title)) {
      findMovies.push(movie)
    }
  })
  section.innerHTML = ""
  findMovies.forEach(arr => {
    let temp_html = `<div class="movie-card" id="${arr.id}" onclick="showAlert(this)">
                      <img class="movie-image" src="https://image.tmdb.org/t/p/w500${arr.poster_path}" alt="...">
                      <h2>${arr.title}</h2>
                      <p>${arr.overview}</p>
                      <p>Vote average ⭐${arr.vote_average}</p>
                    </div>`
   section.innerHTML += temp_html;
  })
}
searchBtn.addEventListener('click', searchMovie);