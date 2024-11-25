import "./Skills.css";
import data from "../../data/data.json";
import Category from "../Category/Category";
import Title from "../Title/Title";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      items: ["JavaScript", "HTML5", "Python", "CSS"],
    },
    {
      title: "Frameworks",
      items: ["React JS", "React Native", "Node JS", ".NET"],
    },
    {
      title: "Development Software",
      items: ["VS Code", "Visual Studio", "Sublime", "Eclipse"],
    },
    {
      title: "Libraries",
      items: ["Bootstrap", "D3.js", "Node.js", "Scikit-learn python"],
    },
  ];
  return (
    <div className="skills">
      <Title subTitle="" title="My Skills" />
      <div className="myskills">
        {categories.map((category, index) => (
          <Category key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
