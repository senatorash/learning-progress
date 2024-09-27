const rowDiv = document.querySelector(".row");

let page = 1;

const fetchPopularMovieData = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzA2NTE2OTBkNDRlYzUyM2YxMTMwMjdmYjg0MDFjZiIsInN1YiI6IjY2NzQzZmFhYmM5NWUwMTIwODMxZWJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ufAkiLM3tBu70hX7tOlSq5j9riM8i6iH2_yNwcTtY4g",
        },
      }
    );

    // convert json response to proper javascript object
    const data = await response.json();

    // all api server related errors
    if (!response.ok) {
      return console.log("something went wrong");
    }

    if (data.results && data.results.length > 0) {
      for (movie of data.results) {
        const movieCol = document.createElement("div");
        movieCol.classList.add("col-md-3");
        movieCol.classList.add("mb-3");
        movieCol.innerHTML = `<div class="card" style="width: 100%">
              <img src=${`https://image.tmdb.org/t/p/w300${movie.poster_path}`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">
                  ${movie.overview.slice(0, 60)}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>`;

        rowDiv.appendChild(movieCol);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const onScrollPage = () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    page += 1;
    fetchPopularMovieData(page);
  }
};

window.addEventListener("load", () => fetchPopularMovieData(page));
window.addEventListener("scroll", onScrollPage);
