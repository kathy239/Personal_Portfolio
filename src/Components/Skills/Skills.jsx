import "./Skills.css";
import data from "../../data/data.json";

import Title from "../Title/Title";

const Skills = () => {
  return (
    <div className="skills">
      <Title subTitle="" title="My Skills" />
      <div className="myskills">
        <div className="category">
          <h2>Programming Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>Python</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="category">
          <h2>Frameworks</h2>
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>Node JS</li>
            <li>.NET</li>
          </ul>
        </div>
        <div className="category">
          <h2>Development Software</h2>
          <ul>
            <li>VS Code</li>
            <li>Visual Studio</li>
            <li>Sublime</li>
            <li>Eclipse</li>
          </ul>
        </div>
        <div className="category">
          <h2>Libraries</h2>
          <ul>
            <li>Bootstrap</li>
            <li>D3.js</li>
            <li>Node.js</li>
            <li>Scikit-learn python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
