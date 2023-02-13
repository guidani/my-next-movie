/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_POPULAR_MOVIES_URL: "https://api.themoviedb.org/3/movie/popular",
    API_SINGLE_MOVIE_URL: "https://api.themoviedb.org/3/movie/",
  }
};

module.exports = nextConfig;
