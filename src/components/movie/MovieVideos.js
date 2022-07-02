import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbApi.getVideoTrailer(movieId), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results) return null;

  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl text-center text-white">Trailers</h2>
      {results.length > 0 ? (
        results.slice(0, 2).map((item) => (
          <div className="max-w-5xl mx-auto mb-10" key={item.id}>
            <h3 className="inline-block p-3 mb-5 font-medium text-white rounded bg-secondary">
              {item.name}
            </h3>
            <div className="aspect-video">
              <iframe
                width="900"
                height="506"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={`Trailer ${item.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="object-fill w-full h-full"
              ></iframe>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">
          <img
            src="https://tekno.esportsku.com/wp-content/uploads/2020/08/Tips-Mengatasi-Error-404-Not-Found-di-PC.png"
            alt="none"
          />
        </div>
      )}
    </div>
  );
};

export default MovieVideos;
