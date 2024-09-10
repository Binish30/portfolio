// import React, { useState } from "react";
// import Title from "../layouts/Title";
// import Education from "./Education";
// import Skills from "./Skills";

// const Resume = () => {
//   const [educationData, setEducationData] = useState(true);
//   const [skillData, setSkillData] = useState(false);

//   return (
//     <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
//       <div className="flex justify-center items-center text-center">
//         <Title title="4 YEARS OF EXPERIENCE" des="My Resume" />
//       </div>
//       <div>
//         <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
//           <li
//             onClick={() => setEducationData(true) & setSkillData(false)}
//             className={`${
//               educationData
//                 ? "border-designColor rounded-lg"
//                 : "border-transparent"
//             } resumeLi`}
//           >
//             Education & Experience
//           </li>
//           <li
//             onClick={() => setEducationData(false) & setSkillData(true)}
//             className={`${
//               skillData ? "border-designColor rounded-lg" : "border-transparent"
//             } resumeLi`}
//           >
//             Professional Skills
//           </li>
//         </ul>
//       </div>
//       {educationData && <Education />}
//       {skillData && <Skills />}
//     </section>
//   );
// };

// export default Resume;

import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="4 YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="mb-12">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi cursor-pointer p-4 border-2 border-solid`}
          >
            Education & Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi cursor-pointer p-4 border-2 border-solid`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
