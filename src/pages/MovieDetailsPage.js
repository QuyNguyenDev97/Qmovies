import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MovieCredits from "../components/movie/MovieCredits";
import MovieSimilar from "../components/movie/MovieSimilar";
import MovieVideos from "../components/movie/MovieVideos";
import { fetcher, tmdbApi } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieDetails(movieId), fetcher);
  if (!data) return null;
  const { title, poster_path, genres, backdrop_path, overview } = data;
  return (
    <div className="pb-10 mt-[100px]">
      <div className="w-full h-[500px] relative mb-10 sm:hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${tmdbApi.getPoster(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[550px] max-w-[500px] sm:mt-0 mx-auto rounded-xl relative z-10 pb-10 -mt-[400px]">
        <img
          src={tmdbApi.getPoster(poster_path)}
          alt="error"
          className="object-center w-full h-full rounded-xl"
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center text-white">
        {title}
      </h1>
      {genres && (
        <div className="flex flex-row items-center justify-center mb-10 gap-x-5">
          {genres.slice(0, 3).map((item) => (
            <span
              key={item.id}
              className="p-1 px-4 py-2 text-base border rounded sm:text-sm border-primary text-primary"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="mb-10 leading-relaxed text-center text-white">{overview}</p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

export default MovieDetailsPage;
