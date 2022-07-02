export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "49c2c21495d0d043ef2a03fc5d5c8cd4";
export const tmdbMovieEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbSearchEndpoint = "https://api.themoviedb.org/3/search/movie";
export const tmdbImgEndpoint = "https://image.tmdb.org/t/p/original";
export const tmdbImg500pxEndpoint = "https://image.tmdb.org/t/p/w500";

export const tmdbApi = {
  getMovieList: (type) => `${tmdbMovieEndpoint}/${type}?api_key=${apiKey}`,
  getMovieCard: (poster_path) => {
    const defaultImage =
      "https://ih1.redbubble.net/image.1027712254.9762/pp,840x830-pad,1000x1000,f8f8f8.u2.jpg";
    return poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : defaultImage;
  },
  getMovieCredit: (movieId) =>
    `${tmdbMovieEndpoint}/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  getSimilarMovie: (movieId) =>
    `${tmdbMovieEndpoint}/${movieId}/similar?api_key=${apiKey}&language=en-US`,
  getMovieDetails: (movieId) =>
    `${tmdbMovieEndpoint}/${movieId}?api_key=${apiKey}&language=en-US`,
  getMoviePopular: (nextPage) =>
    `${tmdbMovieEndpoint}/popular?api_key=${apiKey}&page=${nextPage}`,
  getMovieSearch: (nextPage, debounceValue) =>
    `${tmdbSearchEndpoint}?api_key=${apiKey}&query=${debounceValue}&page=${nextPage}`,
  getCastAvatar: (type) => {
    const defaultAvatar =
      "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png";
    return type ? `${tmdbImgEndpoint}/${type}` : defaultAvatar;
  },
  getPoster: (type) => {
    const defaultPoster =
      "https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png";
    return type ? `${tmdbImgEndpoint}/${type}` : defaultPoster;
  },
  getVideoTrailer: (movieId) =>
    `${tmdbMovieEndpoint}/${movieId}/videos?api_key=${apiKey}&language=en-US`,
};
