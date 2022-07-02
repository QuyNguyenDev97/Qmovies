import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getSimilarMovie(movieId), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results) return null;
  return (
    <div className="py-10 page-container">
      <div className="flex items-center gap-2 mb-5 text-2xl font-bold text-white capitalize">
        <h2>Similar Movies</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-300"
          fill="yellow"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
      <div className="movie-list ">
        <Swiper grabCursor={true} slidesPerView={"auto"} spaceBetween={10}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieSimilar;
