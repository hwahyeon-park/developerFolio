import React, { useContext } from "react";
import "./SoftwareSkill.scss";
import StyleContext from "../../contexts/StyleContext";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="software-skills-div">
      {skillsSection.softwareSkills.map((skill, i) => (
        <div key={i} className="software-skill-icon">
          <i className={skill.fontAwesomeClassname} aria-hidden="true" />
          <p>{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
}