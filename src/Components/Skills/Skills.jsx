import "./Skills.css";
import data from "../../data/data.json";
import Category from "../Category/Category";
import Title from "../Title/Title";

const Skills = () => {
  const SoftSkills = data.SoftSkills || { desc: "No description available." };

  return (
    <div className="skills">
      <Title subTitle="" title="Technical Skills" />
      <div className="myskills">
        {data.Skills.map((category, index) => (
          <Category key={index} title={category.title} items={category.items} />
        ))}
      </div>
      <Title subTitle="" title="Soft Skills" />
      <div className="myskills">
        {SoftSkills.map((data, index) => (
          <div className="category" key={index}>
            <h2 className="attri">{data.skill}</h2>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
