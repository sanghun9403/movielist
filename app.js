// TMDB DATA
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWU3YzY1MzNlYjhkNDBlNmI3OWM2ZmE2OWM1ZjEzZCIsInN1YiI6IjY0NzU1ZmE3YmJjYWUwMDBjMTQ0OTk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8nn4xrB61-s2UBt-t73Wpu1FUrI1vxL-JqK_V6wHAY",
  },
};
const arr = [];
const searchBtn = document.querySelector("#search-btn");
const section = document.querySelector(".card-list");

fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((res) => res.json())
  .then((data) => {
    arr.push(data["results"]);
    let rows = data["results"];

    rows.forEach((list) => {
      let title = list.title;
      let overview = list.overview;
      let path = list.poster_path;
      let star = list.vote_average;
      let id = list.id;

      let temp_html = `<div class="movie-card" id="${id}" onclick="showAlert(this)">
                          <img class="movie-image" src="https://image.tmdb.org/t/p/w500${path}" alt="...">
                          <h2>${title}</h2>
                          <p id="desc">${overview}</p>
                          <p>Vote average ⭐${star}</p>
                        </div>`;
      document.querySelector(".card-list").insertAdjacentHTML("beforeend", temp_html);
    });
  });

function showAlert(movieId) {
  let ids = movieId.id;
  alert(`movie ID : ${ids}`);
}
// 검색기능
// search버튼 클릭 시 작동하도록 설정
// 검색 시 새로고침이 되는것을 방지하기 위해 preventDefault() 입력
function searchMovie(event) {
  event.preventDefault();
  let text = document.querySelector("#search-input").value;
  // 대소문자 구분없이 검색하기 위해 text를 정규형 생성자로 선언 후 영화 이름들을 비교해 해당하는 이름(true)을 배열로 만들고 출력
  let reg = new RegExp(text, "i");
  let findMovies = [];

  arr[0].forEach((movie) => {
    if (reg.test(movie.title)) {
      findMovies.push(movie);
    }
  });
  // 검색버튼 작동 시 화면에 나열된 영화들을 초기화
  section.innerHTML = "";
  findMovies.forEach((arr) => {
    let temp_html = `<div class="movie-card" id="${arr.id}" onclick="showAlert(this)">
                      <img class="movie-image" src="https://image.tmdb.org/t/p/w500${arr.poster_path}" alt="...">
                      <h2>${arr.title}</h2>
                      <p id="desc">${arr.overview}</p>
                      <p>Vote average ⭐${arr.vote_average}</p>
                    </div>`;
    // 검색키워드에 해당하는 영화들을 출력
    section.innerHTML += temp_html;
  });
}
searchBtn.addEventListener("click", searchMovie);
