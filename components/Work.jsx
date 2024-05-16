"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ProjectCard from "../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/1.png",
    category: "Full stack",
    name: "Hospital Management Site",
    description: `Worked as a full-stack developer on a product which is for
        hospital management. The front end is developed in
        Next Js with the Antd ui library. The backend is
        developed in Node Js and Nest Js. Prisma ORM is used
        with MySQL and GraphQL queries for the database.`,
    link: "https://pabau.com/",
  },
  {
    image: "/work/2.png",
    category: "React js",
    name: "Emgage site",
    description: `Worked on the project as a senior frontend developer in a
        cyber security company called Emgage and developed
        many workflows and widgets`,
    link: "https://emgage.com/",
  },
  {
    image: "/work/2.png",
    category: "Next js",
    name: "CIMA site",
    description: `Worked on the project as a front-end end developer in a
        project called CIMA. It is a disaster recovery management
        application based on React and I developed the Project
        lead module with UI and APIs integration.`,
    link: "https://survey.communitydataplatforms.com/",
  },
  {
    image: "/work/3.png",
    category: "React js",
    name: "Caramel Data Platform",
    description: `Worked on the Data Analytics project as well in which I
        created various charts in react.js with the D3.js and
        highchart.`,
    link: "https://survey.communitydataplatforms.com/",
  },
];

function Work() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8"></p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[600px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData?.slice(0, 3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
