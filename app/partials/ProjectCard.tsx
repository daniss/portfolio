import React from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({
  project: { title, description, tags, link },
}) => {
  return (
    <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
      <h1 className="text-xl text-center font-bold">
        {title}
      </h1>
      <hr className="my-4" />
      <p className="text-center" style={{paddingBottom: "10px"}}>{description}</p>
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="px-4 py-1 border-2 rounded-full">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href={link}
          className="hover:text-gray-800"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-3xl" href={link} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
