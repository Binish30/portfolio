import React from "react";
import Title from "../layouts/Title";
import {
  todolist,
  weatherapp,
  cricketscoretracker,
  tictactoe,
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
              I have built a dynamic To-Do List{" "}
              <span className="text-designColor font-bold">
                using React, JavaScript, and CSS,
              </span>{" "}
              and
              <span className="text-designColor font-bold">
                {" "}
                useState and React Icons
              </span>
              , I featuring task and subtask management with a clean UI.
            </p>
          }
          src={todolist}
          github="https://github.com/Binish30/To-Do-List"
          live="https://todo-listapplication.vercel.app/s"
        />

        <ProjectsCard
          title="Weather Application"
          des={
            <p>
              The Weather App is a React-based single-page application that
              utilizes{" "}
              <span className="text-designColor font-bold">
                Axios for asynchronous API
              </span>{" "}
              requests to OpenWeatherMap
              <span className="text-designColor font-bold">
                {" "}
                useState and CSS
              </span>
              , I employs environment variables for secure API key management,
              and is styled with modular CSS for a responsive design.
            </p>
          }
          src={weatherapp}
          github="https://github.com/Binish30/Weather-App"
          live="https://climatracker.vercel.app/"
        />

        <ProjectsCard
          title="Simple Cricket Score Tracker"
          des={
            <p>
              Developed an interactive web application to track cricket scores,
              displaying runs per ball and total scores for a user-defined
              number of overs. Built using{" "}
              <span className="text-designColor font-bold">
                {" "}
                HTML, CSS and JavaScript{" "}
              </span>
              , for responsive design
            </p>
          }
          src={cricketscoretracker}
          github="https://github.com/Binish30/cricket-score-tracker"
          live="https://simple-cricket-score-tracker.vercel.app/"
        />

        <ProjectsCard
          title="Tic Tac Toe"
          des={
            <p>
              A dynamic Tic Tac Toe game developed using{" "}
              <span className="text-designColor font-bold">
                {" "}
                React, JavaScript, and CSS{" "}
              </span>
              , offering both single-player and two-player modes for an engaging
              classic gameplay experience.
            </p>
          }
          src={tictactoe}
          github="https://github.com/Binish30/Tic-Tac-Toe"
          live="https://multiplayer-tic-tac-to-game.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
