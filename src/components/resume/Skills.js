// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaCode,
//   FaJs,
//   FaPython,
//   FaDatabase,
//   FaGithub,
//   FaCog,
//   FaDocker,
//   FaPlug,
// } from "react-icons/fa";
// import {
//   SiMysql,
//   SiMongodb,
//   SiNeo4J,
//   SiOracle,
//   SiRedis,
//   SiFramework,
//   SiReact,
//   SiNodedotjs,
//   SiPostman,
//   SiExpress,
//   SiDjango,
//   SiVisualstudiocode,
//   SiBootstrap,
//   SiHtml5,
//   SiCss3,
// } from "react-icons/si";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const Skills = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-wrap gap-8"
//     >
//       {/* First Column */}
//       <div className="flex-1 flex flex-col items-center gap-8 border-r-4 border-dotted border-gray px-6 py-4">
//         <SectionTitle icon={FaCode} title="Programming Languages" />
//         <SkillItem icon={FaJs} label="JavaScript" level={70} iconColor="text-yellow-500" />
//         <SkillItem icon={FaPython} label="Python" level={40} iconColor="text-[#306998]" />
//       </div>

//       {/* Second Column */}
//       <div className="flex-1 flex flex-col items-center gap-8 border-r-4 border-dotted border-gray px-6 py-4">
//         <SectionTitle icon={FaDatabase} title="Middleware/Database Products" />
//         <SkillItem icon={SiMongodb} label="MongoDB" level={60} iconColor="text-green-600" />
//         <SkillItem icon={SiNeo4J} label="Neo4j (GraphDB)" level={100} />
//         <SkillItem icon={SiMysql} label="MySQL" level={100} iconColor="text-orange-500" />
//         <SkillItem icon={SiOracle} label="Oracle" level={50} iconColor="text-red-600" />
//         <SkillItem icon={SiRedis} label="Redis" level={20} iconColor="text-red-600" />
//       </div>

//       {/* Third Column */}
//       <div className="flex-1 flex flex-col items-center gap-8 border-r-4 border-dotted border-gray px-6 py-4">
//         <SectionTitle icon={SiFramework} title="Frameworks and Tools" />
//         <SkillItem icon={SiReact} label="ReactJS" level={95} />
//         <SkillItem icon={SiNodedotjs} label="NodeJS" level={80} iconColor="text-lightgreen" />
//         <SkillItem icon={SiExpress} label="ExpressJS" level={80} />
//         <SkillItem icon={SiPostman} label="Postman" level={75} iconColor="text-halloweenorange" />
//         <SkillItem icon={FaGithub} label="Github" level={80} />
//         <SkillItem icon={SiDjango} label="Django" level={60} />
//         <SkillItem icon={SiVisualstudiocode} label="Visual Studio Code" level={80} />
//         <SkillItem icon={SiBootstrap} label="Bootstrap" level={40} iconColor="text-purple-600" />
//       </div>

//       {/* Fourth Column */}
//       <div className="flex-1 flex flex-col items-center gap-8 px-6 py-4">
//         <SectionTitle icon={FaCog} title="Others" />
//         <SkillItem icon={SiHtml5} label="HTML5" level={95} />
//         <SkillItem icon={FaDocker} label="Docker" level={80} />
//         <SkillItem icon={FaPlug} label="RESTful APIs" level={80} />
//         <SkillItem icon={SiCss3} label="CSS3" level={75} />
//       </div>
//     </motion.div>
//   );
// };

// const SectionTitle = ({ icon: Icon, title }) => (
//   <div className="flex items-center mb-4">
//     <Icon className="text-blue-600" size={30} />
//     <h2 className="text-1.5xl md:text-1xl font-bold ml-2">{title}</h2>
//   </div>
// );

// const SkillItem = ({
//   icon: Icon,
//   label,
//   level,
//   iconSize = 25,
//   iconColor = "text-blue-600",
// }) => (
//   <div className="flex items-center mb-0 px-8 py-1 w-full">
//     <Icon className={`${iconColor} mr-2`} size={iconSize} />
//     <p className="text-sm uppercase font-medium flex-grow">{label}</p>
//     <div className="w-12 h-12">
//       <CircularProgressbar
//         value={level}
//         text={`${level}%`}
//         styles={buildStyles({
//           pathColor: `rgba(62, 152, 199, ${level / 100})`,
//           textColor: '#f88',
//           trailColor: '#d6d6d6',
//           backgroundColor: '#3e98c7',
//         })}
//       />
//     </div>
//   </div>
// );

// export default Skills;

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaCog,
  FaDocker,
  FaPlug,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiNeo4J,
  SiOracle,
  SiRedis,
  SiFramework,
  SiReact,
  SiNodedotjs,
  SiPostman,
  SiExpress,
  SiDjango,
  SiVisualstudiocode,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-6 lg:px-8"
    >
      {/* First Column */}
      <div className="flex flex-col items-center gap-8 border-b-4 md:border-b-0 md:border-r-4 border-dotted border-gray-300 px-4 py-4">
        <SectionTitle icon={FaCode} title="Programming Languages" />
        <SkillItem icon={FaJs} label="JavaScript" level={70} iconColor="text-yellow-500" />
        <SkillItem icon={FaPython} label="Python" level={40} iconColor="text-[#306998]" />
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center gap-8 border-b-4 md:border-b-0 md:border-r-4 border-dotted border-gray-300 px-4 py-4">
        <SectionTitle icon={FaDatabase} title="Middleware/Database Products" />
        <SkillItem icon={SiMongodb} label="MongoDB" level={60} iconColor="text-green-600" />
        <SkillItem icon={SiNeo4J} label="Neo4j (GraphDB)" level={100} />
        <SkillItem icon={SiMysql} label="MySQL" level={100} iconColor="text-orange-500" />
        <SkillItem icon={SiOracle} label="Oracle" level={50} iconColor="text-red-600" />
        <SkillItem icon={SiRedis} label="Redis" level={20} iconColor="text-red-600" />
      </div>

      {/* Third Column */}
      <div className="flex flex-col items-center gap-8 border-b-4 md:border-b-0 lg:border-r-4 border-dotted border-gray-300 px-4 py-4">
        <SectionTitle icon={SiFramework} title="Frameworks and Tools" />
        <SkillItem icon={SiReact} label="ReactJS" level={95} />
        <SkillItem icon={SiNodedotjs} label="NodeJS" level={80} iconColor="text-lightgreen" />
        <SkillItem icon={SiExpress} label="ExpressJS" level={80} />
        <SkillItem icon={SiPostman} label="Postman" level={75} iconColor="text-halloweenorange" />
        <SkillItem icon={FaGithub} label="Github" level={80} />
        <SkillItem icon={SiDjango} label="Django" level={60} />
        <SkillItem icon={SiVisualstudiocode} label="Visual Studio Code" level={80} />
        <SkillItem icon={SiBootstrap} label="Bootstrap" level={40} iconColor="text-purple-600" />
      </div>

      {/* Fourth Column */}
      <div className="flex flex-col items-center gap-8 px-4 py-4">
        <SectionTitle icon={FaCog} title="Others" />
        <SkillItem icon={SiHtml5} label="HTML5" level={95} />
        <SkillItem icon={FaDocker} label="Docker" level={80} />
        <SkillItem icon={FaPlug} label="RESTful APIs" level={80} />
        <SkillItem icon={SiCss3} label="CSS3" level={75} />
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center mb-4">
    <Icon className="text-blue-600" size={30} />
    <h2 className="text-1.5xl md:text-1xl font-bold ml-2">{title}</h2>
  </div>
);

const SkillItem = ({
  icon: Icon,
  label,
  level,
  iconSize = 25,
  iconColor = "text-blue-600",
}) => (
  <div className="flex items-center mb-0 px-4 py-1 w-full">
    <Icon className={`${iconColor} mr-2`} size={iconSize} />
    <p className="text-sm uppercase font-medium flex-grow">{label}</p>
    <div className="w-10 h-10 md:w-12 md:h-12">
      <CircularProgressbar
        value={level}
        text={`${level}%`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${level / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  </div>
);

export default Skills;

