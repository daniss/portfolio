import React from "react";
import { FaJava } from "react-icons/fa";
import { DiDatabase, DiDocker } from "react-icons/di";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Cindrak Danis",
  title: "Software Engineer",
  social: {
    github: "https://github.com/daniss",
    linkedin: "https://www.linkedin.com/in/danis-cindrak-6328b5244/",
    email: "daniscin@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "Hi! I'm a passionate student at School 42, on a journey to master the art of software development. With a strong focus on backend technologies, I thrive on creating robust, efficient, and scalable systems. What drives me is the joy of continuous learning—I love diving into new programming languages, exploring cutting-edge technologies, and tackling complex problems. For me, every new challenge is an opportunity to grow and push boundaries. If you're looking for someone who combines curiosity, dedication, and technical expertise, let's connect and build something amazing together!",
  },
  skills: [
    {
      skillName: "Backend",
      skillIcon: <DiDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "DevOps",
      skillIcon: <DiDocker className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Java",
      skillIcon: <FaJava className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
};
export default data;
