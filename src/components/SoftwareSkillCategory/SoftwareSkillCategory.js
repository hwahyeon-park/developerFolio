import React, { useContext } from "react";
import "./SoftwareSkillCategory.scss";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkillCategory({ category }) {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="software-skill-category">
      <h2 className={isDark ? "dark-mode category-title" : "category-title"}>
        {category.title}
      </h2>
      <div className="software-skills-div">
        {category.skills.map((skill, i) => (
          <div key={i} className="software-skill-icon">
            <img src={skill.image} alt={skill.skillName} className="skill-image" />
            <p>{skill.skillName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}