import React from "react";
import { GanttChartSquare, PieChart, Database } from "lucide-react";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "./ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Frontend Developer",
    Description:
      "As a FrontEnd developer I developed various of sites in javascript most of are in ReactJs.",
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Backend Developer",
    Description:
      "As a backend developer I create the various API routes in Node express js with different database like firebase, MongoDB, Mysql, PostgreSQL.",
  },
  {
    icon: <PieChart size={72} strokeWidth={0.8} />,
    title: "Data visualization Developer",
    Description:
      "As a Data visualization Developer I have create the many chart using D3.js. I have also used the highchart library for the create the various charts. also create various map charts using Mapbox.",
  },
];
function Services() {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services{" "}
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData?.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.Description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
