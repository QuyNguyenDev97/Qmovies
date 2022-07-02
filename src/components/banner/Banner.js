import React from "react";
import { fetcher } from "../../config/config";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import BannerItems from "./BannerItems";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=49c2c21495d0d043ef2a03fc5d5c8cd4`,
    fetcher
  );
  console.log("Banner ~ data", data);

  const movies = data?.results || [];
  return (
    <section className="banner mt-[100px] sm:h-[500px] h-[600px] mb-20 ">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItems item={item}></BannerItems>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
