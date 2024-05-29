"use client";
import React, { useState } from "react";
import DevImage from "./DevImage";
import Image from "next/image";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNodejsFill,
  RiReactjsFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  FaAws,
  FaSlack,
  FaDocker,
  FaGit,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import {} from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ReduxLogo from "../public/skills/redux.svg";
import TypescriptLogo from "../public/skills/typescript.svg";
import mongoDBLogo from "../public/skills/mongoDB.svg";
import mysqlLogo from "../public/skills/mysql.svg";

import postgresssqlLogo from "../public/skills/postgresssql.svg";
import awsEc2Logo from "../public/skills/awsEc2.svg";
import awsS3Logo from "../public/skills/awss3.svg";
import firebaseLogo from "../public/skills/firebase.svg";
import materialUiLogo from "../public/skills/materialui.svg";
import antDesignLogo from "../public/skills/antdesign.svg";

import graphQlLogo from "../public/skills/graphql.svg";
import agGridLogo from "../public/skills/aggrid.png";
import d3jsLogo from "../public/skills/d3js.svg";
import mapBoxLogo from "../public/skills/mapbox.png";
import highChartLogo from "../public/skills/highchart.png";
import herokuLogo from "../public/skills/heroku.png";
import jestLogo from "../public/skills/jest.png";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Jigar Chauhan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 8849345940",
  },
  {
    icon: <MailIcon size={20} />,
    text: "jigarv007@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master Of Computer Application",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "2/4180 Anavil Street, Sagrampura, Surat, Gujrat",
  },
];
const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Veer Narmad South Gujarat University",
        qualification: "BCA(Bachelor of Computer Applications)",
        years: "2014 - 2017",
      },
      {
        university: "Veer Narmad South Gujarat University",
        qualification: "MCA(Master of Computer Applications)",
        years: "2017 - 2020",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "La Net Team Software Solutions Pvt. LTD.",
        role: "Software Developer",
        years: "2020 - 2022",
      },
      {
        company: "Pabau",
        role: "Full-Stack developer",
        years: "2022 - 2023",
      },
      {
        company: "Emgage",
        role: "Front-end Developer",
        years: "2023 - Prensent",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        imagePath: <RiHtml5Fill size={20} />,
        name: "HTML5",
      },
      {
        imagePath: <RiCss3Fill size={20} />,
        name: "CSS3",
      },
      {
        imagePath: <RiReactjsFill size={20} />,
        name: "ReactJs",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={ReduxLogo} alt="redux" priority />
        ),
        name: "Redux",
      },
      {
        imagePath: <RiNodejsFill size={20} />,
        name: "Nodejs",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={TypescriptLogo}
            alt="redux"
            priority
          />
        ),
        name: "Typescript",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={mongoDBLogo}
            alt="redux"
            priority
          />
        ),
        name: "MongoDB",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={mysqlLogo} alt="redux" priority />
        ),
        name: "MySQL",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={postgresssqlLogo}
            alt="redux"
            priority
          />
        ),
        name: "PostgressSql",
      },
      {
        imagePath: <FaPhp size={20} />,
        name: "PHP",
      },
      {
        imagePath: <FaAws size={20} />,
        name: "AWS",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={awsS3Logo} alt="redux" priority />
        ),
        name: "AWS S3",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={awsEc2Logo} alt="redux" priority />
        ),
        name: "AWS Ec2",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={firebaseLogo}
            alt="redux"
            priority
          />
        ),
        name: "Firebase",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={materialUiLogo}
            alt="redux"
            priority
          />
        ),
        name: "Material UI",
      },
      {
        imagePath: <FaBootstrap size={20} />,
        name: "Bootstrap",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={antDesignLogo}
            alt="redux"
            priority
          />
        ),
        name: "Ant Design",
      },
      {
        imagePath: <FaGit size={20} />,
        name: "Git",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={graphQlLogo}
            alt="redux"
            priority
          />
        ),
        name: "GraphQL",
      },
      {
        imagePath: <FaSlack size={20} />,
        name: "Slack API",
      },
      {
        imagePath: <RiNextjsFill size={20} />,
        name: "NextJS",
      },
      {
        imagePath: <RiNextjsFill size={20} />,
        name: "NestJS",
      },
      {
        imagePath: <FaDocker size={20} />,
        name: "Docker",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={jestLogo} alt="redux" priority />
        ),
        name: "Jest",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={herokuLogo} alt="redux" priority />
        ),
        name: "Heroku",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={agGridLogo} alt="redux" priority />
        ),
        name: "Ag Grid",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={d3jsLogo} alt="redux" priority />
        ),
        name: "D3.Js",
      },
      {
        imagePath: (
          <Image width={20} height={20} src={mapBoxLogo} alt="redux" priority />
        ),
        name: "Mapbox",
      },
      {
        imagePath: (
          <Image
            width={20}
            height={20}
            src={highChartLogo}
            alt="redux"
            priority
          />
        ),
        name: "Highchart",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/about/vscode.svg",
      },
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/githhub.svg",
      },
      {
        imagePath: "/about/postman.svg",
      },
    ],
  },
];
function About() {
  const { theme } = useTheme();
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  const experienceData = getData(qualificationData, "Experience");
  const educationData = getData(qualificationData, "Education");
  const skillFilterData = getData(skillData, "skills");
  const skillToolData = getData(skillData, "tools");
  const [currentTab, setCurrentTab] = useState("Personal info");
  return (
    <section
      className={`xl:h-[${
        currentTab === "Personal info" ? "1360px" : "860px"
      }] pb-12 xl:py-24`}
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImage
              containerStyle={
                "top-[10%] bg-no-repeat w-[505px] h-[505px] relative"
              }
              imgSrc={`/about/${theme==='light'? 'light_profile': 'dark_profile'}.png`}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="personal"
                  onClick={() => setCurrentTab("Personal info")}
                >
                  Personal info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                  onClick={() => setCurrentTab("Qualifications")}
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="skills"
                  onClick={() => setCurrentTab("Skills")}
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-2">
                      I am Jigar,
                      <br />
                      Full Stack Developer
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0 flex flex-col gap-y-3">
                      <span>
                        {`With 5 years of experience in the tech industry, I've
                      honed my skills in both frontend and backend development,
                      allowing me to tackle projects from conception to
                      deployment.`}
                      </span>
                      <span>
                        {`On the frontend, I specialize in creating
                      captivating user interfaces that not only look great but
                      also provide an intuitive experience. I'm proficient in
                      HTML, CSS, and JavaScript, and I stay up-to-date with the
                      latest trends and frameworks like React js and Next js to ensure my projects are always cutting-edge.`}
                      </span>
                      <span>
                        {`When it comes to the backend, I'm no stranger to building
                      robust server-side architectures. I have work on the Node and Nest js as a backend developer.
                       I'm experienced in working with databases like firebase, MySQL, MongoDB, and
                      PostgreSQL.`}
                      </span>
                      <span>
                        I thrive on overcoming challenges and optimizing code
                        for efficiency. My penchant for logical problem-solving
                        extends beyond the workplace, as I actively engage in
                        platforms like Codewars to sharpen my skills.
                        Furthermore, I take pride in assisting others and
                        contributing to a collaborative environment wherever
                        possible.
                      </span>
                    </p>
                    <div className="mb-3">
                      <div className="text-primary mb-2">Contact Details</div>
                      <div className="border-b border-border"></div>
                    </div>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData?.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={`${item.text}-${index}`}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi, Gujrati</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
                            {experienceData?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {experienceData?.data?.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {educationData?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {educationData?.data?.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    {/* <h3 className="h3 mb-8">Here My </h3> */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>

                      <div className="flex flex-wrap gap-x-6 gap-y-4">
                        {skillFilterData?.data?.map((item, index) => {
                          const { name, imagePath } = item;
                          return (
                            <div
                              className="flex items-center text-center relative justify-center"
                              key={`${name}-${index}`}
                            >
                              <Badge
                                variant="outline"
                                className={
                                  "hover:bg-primary transition-all hover:text-primary-foreground"
                                }
                              >
                                <div className="flex items-center justify-center gap-x-2 p-[2px]">
                                  {imagePath}
                                  <div className="font-medium">{name}</div>
                                </div>
                              </Badge>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {skillToolData?.data?.map((item, index) => {
                          return (
                            <div key={index}>
                              <Image
                                src={item.imagePath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
