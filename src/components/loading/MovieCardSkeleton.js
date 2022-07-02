import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const MovieCardSkeleton = () => {
  return (
    <div
      className="flex flex-col p-3 rounded-lg select-none movie-cart bg-slate-800"
    >
      <div className="mb-10">
        <LoadingSkeleton
          width="100%"
          height="250px"
          borderRadius="8px"
        ></LoadingSkeleton>
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-3">
          <LoadingSkeleton
            width="100%"
            height="50px"
            borderRadius="8px"
          ></LoadingSkeleton>
        </div>
        <div className="mb-10 ">
          <LoadingSkeleton
            width="100%"
            height="20px"
            borderRadius="8px"
          ></LoadingSkeleton>
        </div>
        <div className="">
          <LoadingSkeleton
            width="100%"
            height="48px"
            borderRadius="8px"
          ></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
