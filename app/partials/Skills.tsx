import React from "react";
import SkillCard from "./SkillCard";

interface Skill {
    skillName: string;

    skillIcon: React.JSX.Element;
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      {skills.map((skill, index) => {
        return (
          <SkillCard key={index} skillName={skill.skillName} skillIcon={skill.skillIcon} />
        );
      })}
    </div>
  );
}
