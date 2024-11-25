import Title from "../Title/Title";
import "./Projects.css";
import Project from "./Project";
import data from "../../data/data.json";
const Projects = () => {
  const projectData = [
    {
      title: "Machine-Demo-Using-VR",
      subtitle: "University of South Australia, Adelaide, South Australia",
      attributes: [
        {
          label: "Objective",
          description:
            "Help Future Industry to demonstrate their latest in-line coating techs to their potential customers (usually located overseas/interstate)",
        },
        {
          label: "Tools",
          description: "Unity 3D, C#",
        },
        {
          label: "Duties",
          description:
            "Co-Developer in a dual developer group. I was in charge of writing the animation scripts in C#. Those scripts run in the backend and animate the 3D objects in the Application.",
        },
        {
          label: "Outcome",
          description:
            "We developed an app that works on PC (with HTC VIVE), IOS and Android",
        },
        {
          label: "Result",
          description: "Obtained a Distinction for the project",
        },
      ],
    },
  ];
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
