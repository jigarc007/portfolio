"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import ProjectCard from "../../components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

export default function Projects() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  console.log({ category });
  const filterProjectData = projectData?.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  console.log({ filterProjectData });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {" "}
          My Projects
        </h2>

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none ">
            {categories.map((item, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(item)}
                  className="capitalize w-[162px] md:w-auto"
                  key={`${item}-${index}`}
                  value={item}
                >
                  {item}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {filterProjectData?.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
