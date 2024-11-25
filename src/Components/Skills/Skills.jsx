import "./Skills.css";
import data from "../../data/data.json";
import Category from "../Category/Category";
import Title from "../Title/Title";

const Skills = () => {
  const categories = data.Skills;
  return (
    <div className="skills">
      <Title subTitle="" title="My Skills" />
      <div className="myskills">
        {data.Skills.categories.map((category, index) => (
          <Category key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
