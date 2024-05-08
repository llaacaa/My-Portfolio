import { useState, useEffect } from "react";
import ProjectComponent from "./Project";
import { motion } from "framer-motion";

type Project = {
  title: string;
  about: string;
  img: string;
  page: string;
};

const projects: Project[] = [
  {
    title: "CampSpotter",
    about:
      "This is a simple CRUD application that is implemented using vanilla javascript, node.js and mongoDB to store the users and camp spots. It has basic user authentication using sessions and cookies. Users can create, review, edit and delete camp spots. Every camp spot has an author, at least one picture, desctiption and price per night. Campspots could have reviews. Reviews have number of stars (from 1 to 5), author and a comment.",
    img: "campspotter.png",
    page: "https://github.com/llaacaa/CampSpotter",
  },
  {
    title: "Quiz App",
    about:
      "Quiz app first prompts user for his name and then the quiz starts. Questions are shuffled before and for every question you there is a timer shown for the active question. If the question is correct the selected answer turns green otherwise red, and you can see a timer to see when the next question begins. When the quiz is finished you can see which questions were answered correctly and incorrectly. There is also a made statistic for the quiz.",
    img: "quiz.png",
    page: "https://github.com/llaacaa/React-Timer-Guess-Game",
  },
  {
    title: "Project manager",
    about:
      "Create projects and add or delete tasks from it. Created using React and styled using Tailwind CSS.",
    img: "projectmanager.png",
    page: "https://github.com/llaacaa/Project-manager",
  },
  {
    title: "Tic Tac Toe",
    about:
      "Classic Tic Tac Toe game created using React. First you get promped for players name and then the game starts. When the game is finished a modal is shown to display the game outcome.",
    img: "TicTacToe.png",
    page: "https://github.com/llaacaa/React-Tic-Tac-Toe",
  },
  {
    title: "Food Order App",
    about:
      "An application made for the foodies. You can order meals that are fetched from the backend and stored in the cart component. When you are finished ordering you can click on the cart to get the details of your order. You can see the quantity and the price of the order that is inquired. The frontend is made in React with React Router and the meals are fetched from the backend made in Node.js.",
    img: "food.png",
    page: "https://github.com/llaacaa/React-Food-Order-App",
  },
  {
    title: "Event App",
    about:
      "This is an event management app that helps people manage their upcoming events. All available events are fetched from the backend and shown on All Events. Users can create, update and delete events as they please. An event has information about the title, date and some pictures that describe the event. The application is made in React, with Tanstack Query and Node.js as the backend.",
    img: "event.png",
    page: "https://github.com/llaacaa/Event-App",
  },
];

const Projects: React.FC<{ refs: React.RefObject<HTMLDivElement>[] }> = (
  props
) => {
  useEffect(() => {
    props.refs[0].current!.scrollIntoView({ behavior: "smooth" });
  }, [props.refs]);

  const [activeRef, setActiveRef] = useState(0);

  const handleUp = () => {
    const nextRef = activeRef === 0 ? 5 : activeRef - 1;
    setActiveRef(nextRef);
    props.refs[nextRef].current!.scrollIntoView({ behavior: "smooth" });
  };

  const handleDown = () => {
    const nextRef = activeRef === 5 ? 0 : activeRef + 1;
    setActiveRef(nextRef);
    props.refs[nextRef].current!.scrollIntoView({ behavior: "smooth" });
  };

  const navigationClick = (to: number) => {
    setActiveRef(to);
    props.refs[to].current!.scrollIntoView({ behavior: "smooth" });
  };

  const classAcitve =
    "bg-white px-1 py-3 mx-2 cursor-pointer border-white border-2 my-2";
  const classNotActive =
    "border-white border-2 px-1 py-3 mx-2 cursor-pointer my-2";

  return (
    <>
      <div className=" h-screen"></div>
      <div className=" h-screen"></div>
      <div className="sticky top-0 w-full">
        <motion.div className="absolute top-0 right-0 w-1/5 navProjects mr-5 mt-5 ">
          <div className="flex">
            <motion.div
              className={activeRef === 0 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 0 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(0)}
            ></motion.div>
            <motion.div
              className={activeRef === 1 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 1 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(1)}
            ></motion.div>
          </div>
          <div className="flex">
            <motion.div
              className={activeRef === 2 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 2 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(2)}
            ></motion.div>
            <motion.div
              className={activeRef === 3 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 3 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(3)}
            ></motion.div>
          </div>
          <div className="flex">
            <motion.div
              className={activeRef === 4 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 4 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(4)}
            ></motion.div>
            <motion.div
              className={activeRef === 5 ? classAcitve : classNotActive}
              animate={{
                scale: activeRef === 5 ? 1.3 : 1,
                transition: { duration: 0.3 },
              }} // Scale up when active
              onClick={() => navigationClick(5)}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <div className=" lg:mx-32">
        {projects.map((item: Project, index: number) => {
          return (
            <div
              className="h-screen flex flex-col justify-between items-center"
              key={index}
              ref={props.refs[index]}
            >
              <motion.button
                className="text-cyan-50 text-center bg-slate-50 w-12 h-12 rounded-full bg-opacity-60 p-1 mt-5 projMargButtonsTop"
                onClick={handleUp}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.4 }}
              >
                <img src="arrow.svg" />
              </motion.button>
              <div className=" justify-center">
                <ProjectComponent
                  key={index}
                  title={item.title}
                  about={item.about}
                  index={index}
                  src={item.img}
                  page={item.page}
                />
              </div>
              <motion.button
                className="text-cyan-50 text-center bg-slate-50 w-12 h-12 rounded-full bg-opacity-60 p-1 mb-5 projMargButtonsBot"
                onClick={handleDown}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.4 }}
              >
                <img src="arrow.svg" className=" rotate-180" />
              </motion.button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
