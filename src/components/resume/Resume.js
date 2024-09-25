import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [skillData, setSkillData] = useState(true); // Set skills as default tab
  const [educationData, setEducationData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="4 YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="mb-12">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <li
            onClick={() => {
              setSkillData(true);
              setEducationData(false);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi cursor-pointer p-4 border-2 border-solid`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setSkillData(false);
              setEducationData(true);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi cursor-pointer p-4 border-2 border-solid`}
          >
            Experience & Education
          </li>
        </ul>
      </div>
      {skillData && <Skills />}
      {educationData && <Education />}
    </section>
  );
};

export default Resume;
