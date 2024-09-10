import React from "react";
import { FaTerminal, FaTools, FaNetworkWired } from "react-icons/fa";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Developer of Engaging Web Applications"
          des="I focus on using ReactJS, NodeJS and MongoDB to build responsive and interactive web applications. My goal is to create user-friendly digital experiences that are both functional and visually appealing."
          icon={<FaTerminal />}
        />

        <Card
          title="Adaptable Team Player"
          des="Drawing from experience in a variety of team settings, I excel at blending adaptability with collaborative skills. My approach ensures seamless integration into diverse project environments, enhancing team dynamics and driving collective success."
          icon={<FaNetworkWired />}
        />

        <Card
          title="Focused on Practical Solutions"
          des="I solve problems by improving performance and enhancing user experience, using smart and effective approaches to address challenges efficiently."
          icon={<FaTools />}
        />
      </div>
    </section>
  );
};

export default Features;