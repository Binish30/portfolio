import React from "react";
import Title from "../layouts/Title";
import {
 todolist
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="To Do List"
          des={
            <p>
              I built a dynamic To-Do List{" "}
              <span className="text-designColor font-bold">
              using React, JavaScript, and CSS,
              </span>{" "}
              and
              <span className="text-designColor font-bold"> useState and React Icons</span>, I
              featuring task and subtask management with a clean UI.
            </p>
          }
          src={todolist}
          github="https://github.com/Binish30/To-Do-List"
          live="https://todo-listapplication.vercel.app/s"
        />
      </div>
    </section>
  );
};

export default Projects;