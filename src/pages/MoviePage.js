import React, { useEffect, useState } from "react";
import { fetcher, tmdbApi } from "../config/config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import MovieCardSkeleton from "../components/loading/MovieCardSkeleton";

const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState("");
  const handlerFilter = (e) => {
    setFilter(e.target.value);
  };
  const debounceValue = useDebounce(filter, 500);
  const [url, setUrl] = useState(tmdbApi.getMoviePopular(nextPage));
  const { data, error } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const loading = !data && !error;
  useEffect(() => {
    debounceValue
      ? setUrl(tmdbApi.getMovieSearch(nextPage, debounceValue))
      : setUrl(tmdbApi.getMoviePopular(nextPage));
  }, [debounceValue, nextPage]);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [itemOffset, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container mt-[100px]">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type to search..."
            className="w-full p-4 text-white rounded-l-lg outline-none bg-slate-800"
            onChange={handlerFilter}
          />
        </div>
        <button className="flex items-center p-4 text-white rounded-r-lg cursor-default bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="grid grid-cols-4 gap-10 sm:grid-cols-1 lg:grid-cols-3 lg:gap-5 sm:gap-y-5">
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
          <MovieCardSkeleton></MovieCardSkeleton>
        </div>
      )}
      <div className="grid grid-cols-4 gap-10 lg:grid-cols-3 lg:gap-5 sm:grid-cols-1 sm:gap-y-5">
        {movies.length > 0 &&
          !loading &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10 text-white sm:hidden">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="pagination-number"
          previousClassName="pagination-previous"
          nextClassName="pagination-next"
        />
      </div>
    </div>
  );
};

export default MoviePage;
