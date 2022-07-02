import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbApi } from "../../config/config";
import Button from "../buttons/Button";

const MovieCard = ({ item }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-cart bg-slate-800">
      <img
        src={tmdbApi.getMovieCard(poster_path)}
        alt="error"
        className="w-full h-full mb-5 max-h-[250px]  rounded-lg"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{release_date}</span>
          <span>{vote_average}</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch now</Button>
      </div>
    </div>
  );
};

export default MovieCard;
