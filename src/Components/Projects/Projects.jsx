import Title from "../Title/Title";
import "./Projects.css";
import Project from "./Project";
import data from "../../data/data.json";
const Projects = () => {
  return (
    <div className="projects">
      <Title title="Projects" subTitle="" />
      {data.Projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          attributes={project.attributes}
        />
      ))}
    </div>
  );
};

export default Projects;
