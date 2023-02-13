/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKey: "?api_key=eab74dfeeef5ea34b530f7322b1d4ef7",
    apiPopularMoviesURL: "https://api.themoviedb.org/3/movie/popular",
    apiUpcomingMoviesURL: "",
    apiTopRatedMoviesURL: "",
    apiLatestMoviesURL:"",
    apiSingleMovieURL: "https://api.themoviedb.org/3/movie/",
  },
};

module.exports = nextConfig;
