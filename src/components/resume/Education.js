import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { stordis, srh, tata, shahandanchor, msbte } from '../../assets';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';

const Education = () => {
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1, transition: { duration: 0.5 }}}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">

        {/* part one - Job Experience */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 pl-12">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
      <FaBriefcase className="text-designColor" /> Job Experience
    </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <ResumeCard
            title="Junior Value Driven Software Delivery Manager"
            subTitle="Stordis GmbH - (November 2023 - March 2024)"
            location="Stuttgart, Germany"
            des="At Stordis GmbH, I developed a custom network management solution with JavaScript, ReactJS, and NodeJS, reducing manual task time by 30%. I enhanced the UI, integrated Docker, and optimized system performance through API testing with Postman."
            logo={stordis}
          />
          <ResumeCard
            title="Junior Software Developer (Internship)"
            subTitle="Stordis GmbH - (April 2023 - October 2023)"
            location="Stuttgart, Germany"
            des="During my internship at Stordis GmbH, I developed a custom network management system with JavaScript, ReactJS, and NodeJS/Django, reducing task time by 30%. I optimized data retrieval with Neo4j GraphDB, integrated Docker, and conducted API testing with Postman to enhance system performance."
            logo={stordis}
          />
          <ResumeCard
            title="System Engineer"
            subTitle="Tata Consultancy Services (December 2018 - January 2022)"
            location="Mumbai, India"
            des="At TCS, I implemented a monitoring system for NEFT, RTGS, and IMPS transactions using Linux commands, reducing lapses by 50%. I developed APIs for UPI transactions, optimized server downtime by 4 hours, and improved productivity by 40% through automation and Cron jobs."
            logo={tata}
          />
        </div>
      </div>

      {/* part two - Education */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
      <FaGraduationCap className="text-designColor" /> Education
    </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">
          <ResumeCard
          title="Masters of Science in Applied Computer Science(M.Sc.)"
          subTitle="SRH Hochschule Heidelberg (2021-2023)"
          location="Heidelberg, Germany"
          result="2.7/5.0"
          des="Graduated with a Master's degree in Applied Computer Science from SRH Heidelberg, equipped with specialized knowledge and practical skills to excel in tackling complex challenges in web development." 
          logo={srh}/>

          <ResumeCard
          title="Bachelors of Engineering in Information Technology(B.E.)"
          subTitle="Shah and Anchor Kutchhi Engineering College (University of Mumbai) (2015-2018)"
          location="Mumbai, India"
          result="6.91/10.00"
          des="Obtained a Bachelor's degree in Information Technology from Shah and Anchor Kutchhi Engineering College (University of Mumbai), building a strong foundation of knowledge and skills in computer science, software engineering, and well-prepared to thrive in the tech industry." 
          logo={shahandanchor}
          />

          <ResumeCard
          title="Diploma in Computer Technology"
          subTitle="Sardar Vallabhbhai Patel Polytechnic (Maharashtra State Board of Technical Education) (2012-2015)"
          location="Mumbai, India"
          result="73.76%"
          des="Achieved a diploma in Computer Technology from Sardar Vallabhbhai Patel Polytechnic, Maharashtra State Board of Technical Education, developing a solid base in programming skills, and gaining hands-on experience in software development projects."
          logo={msbte}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
