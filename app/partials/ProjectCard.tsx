import React from "react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  desc_detailled: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({
  project: { title, description, tags, link, desc_detailled },
}) => {
    const [isProjectOpen, setIsProjectOpen] = React.useState(false);

    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        setIndex(index);
    }, [index]);

    console.log('index', index);

    const handleProjectClick = () => {
        setIsProjectOpen(!isProjectOpen);
    };
  return (
    <div 
        className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300"
        style={{backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))"}}
    >
      <h1 className="text-xl text-center font-bold">
        {title}
      </h1>
    <div className="flex justify-center mt-4 mb-4">
      <button className="hover:text-gray-800" onClick={handleProjectClick}>
        learn more about this project
      </button>
    </div>
    {isProjectOpen && (
        <div style={popupStyle} onClick={handleProjectClick}>
          <div style={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ border: "1px solid #333", padding: "15px" }}>
                <p>{desc_detailled}</p>
            </div>
            <button onClick={handleProjectClick} style={closeButtonStyle}>
              Close
            </button>
          </div>
        </div>
      )}
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

const popupStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };
  
const popupContentStyle: React.CSSProperties = {
    backgroundColor: "hsl(var(--card))",
    padding: "20px",
    borderRadius: "var(--radius)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "500px",
    width: "90%",
    color: "hsl(var(--card-foreground))",
    border: "2px solid hsl(var(--card-border))",
};

const closeButtonStyle = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
  
  

export default ProjectCard;
