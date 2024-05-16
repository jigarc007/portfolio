"use client";
import Link from "next/link";
import React from "react";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.youtube.com/channel/UCWhQ8_rz9zbEcUTwCarC9rw",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/jigar-chauhan-200b6116b/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/jigarc007/",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100007272828495",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://www.instagram.com/jigarvchauhan/",
    name: <RiInstagramFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons?.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
