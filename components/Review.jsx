"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Harout kerjan",
    job: "Owner of emgage",
    review:
      "Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Jigar.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Saurabh joshi",
    job: "Owner of Cimma",
    review:
      "Great experience. Would definitely work with Jigar again in the future!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Peter marks",
    job: "Owner of Real estate site",
    review:
      "Great experience. Would definitely work with Jigar again in the future!",
  },
];
function Review() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 mx-auto">Reviews</h2>

        <Swiper
          className="h-[350px]"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewsData?.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription>{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Review;
