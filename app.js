// TMDB DATA
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWU3YzY1MzNlYjhkNDBlNmI3OWM2ZmE2OWM1ZjEzZCIsInN1YiI6IjY0NzU1ZmE3YmJjYWUwMDBjMTQ0OTk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8nn4xrB61-s2UBt-t73Wpu1FUrI1vxL-JqK_V6wHAY'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {
    let rows = data['results'];
    console.log(rows)

    rows.forEach(list => {
      let title = list.title
      let overview = list.overview
      let path = list.poster_path
      let star = list.vote_average
      let id = list.id

      let temp_html = `<section class="card-list">
                        <div class="movie-card" "id="${id}">
                          <img class="movie-image" src="https://image.tmdb.org/t/p/w500${path}" alt="...">
                          <h2>${title}</h2>
                          <p>${overview}</p>
                          <p>Vote average ${star}</p>
                        </div>
                       </div>`

      document.querySelector('.card-list').insertAdjacentHTML('beforeend',temp_html);
    });

  })
// 검색기능
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
})