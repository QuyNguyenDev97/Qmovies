import React from "react";
import { useNavigate } from "react-router-dom";
import { fetcher, tmdbApi } from "../../config/config";
import useSWR from "swr";
import Button from "../buttons/Button";

const BannerItems = ({ item }) => {
  const navigate = useNavigate();

  const { title, poster_path, id, backdrop_path, overview } = item;
  console.log("BannerItems ~ item", item);
  const { data } = useSWR(tmdbApi.getMovieDetails(id), fetcher);
  if (!data) return null;
  const { genres } = data;

  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="inset-0 overlay absolute bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.7)] rounded-lg"></div>
      <img
        src={tmdbApi.getCastAvatar(backdrop_path)}
        alt="error"
        className="w-full h-full rounded-lg "
      />
      <div className="absolute lg:inset-10 sm:inset-5 top-10 gap-x-20 right-5 flex sm:flex-col-reverse left-[120px]">
        <div className="sm:pt-0 pt-[100px] w-[600px] text-white ">
          <h2 className="mb-5 text-4xl font-bold sm:mb-1 sm:text-xl">
            {title}
          </h2>
          <div className="sm:hidden max-w-[500px] h-[112px] mb-4">
            <p className="text-xl text-truncate ">{overview}</p>
          </div>
          <div className="flex items-center mb-8 sm:mb-4 gap-x-3">
            {genres.length > 0 &&
              genres.slice(0, 3).map((item) => (
                <span
                  key={item.id}
                  className="px-4 py-2 bg-transparent border border-white rounded-md sm:px-1"
                >
                  {item.name}
                </span>
              ))}
          </div>
          <Button
            className="max-w-[180px]"
            onClick={() => navigate(`/movie/${id}`)}
          >
            Watch now
          </Button>
        </div>
        <div className="sm:mb-0 mb-2 sm:h-[300px] sm:w-[300px] h-[500px] rounded-md ">
          <img
            src={tmdbApi.getCastAvatar(poster_path)}
            alt="none"
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerItems;
