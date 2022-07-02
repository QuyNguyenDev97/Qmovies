import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getMovieCredit(movieId), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast) return null;
  return (
    <div className="py-10 ">
      <h2 className="mb-10 text-3xl text-center text-white">Casts</h2>
      <div
        className={
          cast.length > 0
            ? "grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-5"
            : ""
        }
      >
        {cast.length > 0 ? (
          cast.slice(0, 4).map((item) => (
            <div key={item.id} className="p-5 rounded-lg bg-slate-800">
              <div className="cast-item">
                <img
                  src={tmdbApi.getCastAvatar(item.profile_path)}
                  alt=""
                  className="w-full h-[350px] rounded-lg object-cover mb-5"
                />
                <h3 className="text-xl font-medium text-center text-white">
                  {item.name}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div className="flex gap-5">
            <div>
              <img
                src="https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"
                alt="none"
              />
            </div>
            <div>
              <img
                src="https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"
                alt="none"
              />
            </div>
            <div>
              <img
                src="https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"
                alt="none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCredits;
