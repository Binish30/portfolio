import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1, transition: { duration: 0.5 }}}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">

        {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] flex flex-col gap-10">
          <ResumeCard
          title="Masters of Science in Applied Computer Science(M.Sc.)"
          subTitle="SRH Hochschule Heidelberg (2021-2023)"
          location="Germany"
          result="2.7/5.0"
          des="Graduated with a Master's degree in Applied Computer Science from SRH Heidelberg, equipped with specialized knowledge and practical skills to excel in tackling complex challenges in web development." />

          <ResumeCard
          title="Bachelors of Engineering in Information Technology(B.E.)"
          subTitle="Shah and Anchor Kutchhi Engineering College (University of Mumbai) (2015-2018)"
          location="India"
          result="6.91/10.00"
          des="Obtained a Bachelor's degree in Information Technology from Shah and Anchor Kutchhi Engineering College (University of Mumbai) , building a strong foundation of knowledge and skills, and well-prepared to thrive in web development." />

          <ResumeCard
          title="Diploma in Computer Technology"
          subTitle="Sardar Vallabhbhai Patel Polytechnic (Maharashtra State Board of Technical Education) (2012-2015)"
          location="India"
          result="73.76%"
          des="Achieved a diploma in Computer Technology from Sardar Vallabhbhai Patel Polytechnic, Maharashtra State Board of Technical Education, developing a solid base in programming and development expertise."/>
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 pl-12">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] flex flex-col gap-10">
          <ResumeCard
            title="Junior Value Driven Software Delivery Manager"
            subTitle="Stordis GmbH - (November 2023 - March 2024)"
            location="Germany"
            des="At Stordis GmbH, I developed a custom network management solution with JavaScript, ReactJS, and Django, reducing manual task time by 30%. I enhanced the UI, integrated Docker, and optimized system performance through API testing with Postman."
          />
          <ResumeCard
            title="Junior Software Developer (Internship)"
            subTitle="Stordis GmbH - (April 2023 - October 2023)"
            location="Germany"
            des="During my internship at Stordis GmbH, I developed a custom network management system with JavaScript, ReactJS, and Django, reducing non-automated task time by 30%. I also optimized data retrieval using Neo4j GraphDB, integrated Docker for development, and conducted API testing with Postman, enhancing overall system performance."
          />
          <ResumeCard
            title="System Engineer"
            subTitle="Tata Consultancy Services (December 2018 - January 2022)"
            location="India"
            des="At TCS, I implemented a comprehensive monitoring system for NEFT, RTGS, and IMPS transactions using Linux commands, reducing transaction lapses by 50%. I also developed APIs for UPI transactions, enhanced efficiency with Cron jobs, and optimized server downtime, leading to a 40% productivity increase."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;