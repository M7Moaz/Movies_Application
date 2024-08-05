const api_key = "ff70a9bedefebc564e1ea5b219e3f47b";
const access_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjcwYTliZWRlZmViYzU2NGUxZWE1YjIxOWUzZjQ3YiIsIm5iZiI6MTcyMjQ2MDgyOS40NTEwMTMsInN1YiI6IjY2YWE4YjFjZjljOWY5ZjNhNGUzYzIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I-Sk0_FYk6bFbzrVth5m58cvdOsk74utXkNxfVtZCvU";
const base_url = "https://api.themoviedb.org/3";

const movieAPI = async () => {
  const base_img = "https://image.tmdb.org/t/p/w500";
  const get_movies = "/discover/movie";

  const api_url = `${base_url}${get_movies}?language=ar-AR&page=1&&api_key=${api_key}`;

  const res = await fetch(api_url);
  const data = await res.json();

  return data;
};

export const detailAPI = async ({ id, type = "movie" }) => {
  const url = `${base_url}/${type}/${id}?language=ar-AR`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const details = await res.json();

  return details;
};

export const videoAPI = async ({ id, type = "movie" }) => {
  const url = `${base_url}/${type}/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const videos = await res.json();

  return videos;
};

export const movieByType = async (id, page = 1) => {
  const url = `${base_url}/discover/movie?api_key=${api_key}&language=ar-AR&with_genres=${id}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const movies = await res.json();

  return movies;
};

export const getTheList = async () => {
  const url = `${base_url}/genre/movie/list?language=ar&api_key=${api_key}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const lists = await res.json();

  return lists.genres;
};

export const getSeries = async (page = 1) => {
  const url = `${base_url}/discover/tv?language=ar-AR&api_key=${api_key}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const series = await res.json();

  return series;
};

export const searchFor = async (query, page = 1) => {
  const url = `${base_url}/search/multi?query=${query}&language=ar-AR&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const toFind = await res.json();

  return toFind.results;
};

export const similarTo = async (id, type = "movie") => {
  const url = `https://api.themoviedb.org/3/${type}/${id}/similar?language=ar-AR&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const res = await fetch(url, options);
  const similar = await res.json();

  return similar.results;
};

export default movieAPI;
