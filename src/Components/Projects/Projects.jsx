import Title from "../Title/Title";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <Title title="Projects" subTitle="" />
      <div className="project">
        <div className="project-header">
          <h3 className="project-title">Machine-Demo-Using-VR</h3>
          <div className="project-subtitle">
            University of South Australia, Adelaide, South Australia
          </div>
        </div>
        <div className="project-attri">
          <div>Objective</div>
          <p className="description">
            Help Future Industry to demonstrate their latest in-line coating
            techs to their potential customers (usually located
            overseas/interstate)
          </p>
        </div>
        <div className="project-attri">
          <div>Tools</div>
          <p className="description">Unity 3D, C#</p>
        </div>
        <div className="project-attri">
          <div>Duties</div>
          <p className="description">
            Co-Developer in a dual developer group. I was in charge of writing
            the animation scripts in C#. Those scripts run in the backend and
            animate the 3D objects in the Application.
          </p>
        </div>
        <div className="project-attri">
          <div>Outcome</div>
          <p className="description">
            We developed an app that works on PC (with HTC VIVE), IOS and
            Android
          </p>
        </div>
        <div className="project-attri">
          <div>Result</div>
          <p className="description">Obtained a Distinction for the project</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
