const Project = ({ title, subtitle, attributes }) => {
  return (
    <div className="project">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-subtitle">{subtitle}</div>
      </div>
      {attributes.map((attr, index) => (
        <div className="project-attri" key={index}>
          <div>{attr.label}</div>
          <p className="description">{attr.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Project;
