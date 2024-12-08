import React from "react";
import ProjectCard from "./ProjectCard";
import { supabase } from "../supabase";

type Project = {
    description: string;
    title: string;
    tags: string[];
    link: string;
    desc_detailled: string;
}



async function fetchProjects(): Promise<Project[]> {
    const response = await supabase.from("project").select("*");
    const projects = response.data as Project[];
    console.log(projects);
    return projects;
}

const Projects = () => {
    const [projects, setProjects] = React.useState<Project[]>([]);
    React.useEffect(() => {
        fetchProjects().then((projects) => setProjects(projects));
    }, []);
    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
            <div className="flex flex-wrap justify-center mt-4 mb-4 w-full md:w-1/2 mx-auto">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </div>
        </div>
    );
};

export default Projects;