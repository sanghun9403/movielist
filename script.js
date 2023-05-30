const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWU3YzY1MzNlYjhkNDBlNmI3OWM2ZmE2OWM1ZjEzZCIsInN1YiI6IjY0NzU1ZmE3YmJjYWUwMDBjMTQ0OTk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8nn4xrB61-s2UBt-t73Wpu1FUrI1vxL-JqK_V6wHAY'
  }
};

fetch('https://api.themoviedb.org/3/account/19731249/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  