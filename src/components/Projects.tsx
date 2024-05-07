import { useEffect, useRef, useState } from "react";
import ProjectComponent from "./Project";
import { motion, useInView } from "framer-motion";

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
      "Quiz app first prompts user for his name and then the quiz starts. Questions are shuffled before and for every question you there is a timer shown to see how many secounds are remaining for the active question. If the question is correct the selected answer turns green otherwise red, and you can see a timer to see when the next question begins. When the quiz is finished you can see which questions were answered correctly and incorrectly. There is also a made statistic for the quiz.",
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

const Projects = () => {
  const [activeRef, setActiveRef] = useState(0);

  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const isInViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(isInViewRef);

  useEffect(() => {
    if (!isInView) {
      setActiveRef(0);
    }
  }, [isInView]);

  const handleUp = () => {
    const nextRef = activeRef === 0 ? 5 : activeRef - 1;
    setActiveRef(nextRef);
    refs[nextRef].current!.scrollIntoView({ behavior: "smooth" });
  };

  const handleDown = () => {
    const nextRef = activeRef === 5 ? 0 : activeRef + 1;
    setActiveRef(nextRef);
    refs[nextRef].current!.scrollIntoView({ behavior: "smooth" });
  };

  const navigationClick = (to: number) => {
    setActiveRef(to);
    refs[to].current!.scrollIntoView({ behavior: "smooth" });
  };

  const classAcitve = "bg-white px-1 py-3 mx-2";
  const classNotActive = "border-white border-2 px-1 py-3 mx-2";

  return (
    <>
      <div className="sticky top-0 w-full">
        <motion.div className="absolute top-0 right-0 w-1/5 flex mr-5 mt-5">
          <motion.div
            className={activeRef === 0 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 0 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(0)}
          ></motion.div>
          <motion.div
            className={activeRef === 1 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 1 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(1)}
          ></motion.div>
          <motion.div
            className={activeRef === 2 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 2 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(2)}
          ></motion.div>
          <motion.div
            className={activeRef === 3 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 3 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(3)}
          ></motion.div>
          <motion.div
            className={activeRef === 4 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 4 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(4)}
          ></motion.div>
          <motion.div
            className={activeRef === 5 ? classAcitve : classNotActive}
            animate={{ scale: activeRef === 5 ? 1.5 : 1 }} // Scale up when active
            transition={{ duration: 0.3 }}
            onClick={() => navigationClick(5)}
          ></motion.div>
        </motion.div>
      </div>

      <div className=" mx-32" ref={isInViewRef}>
        {projects.map((item: Project, index: number) => {
          return (
            <div
              className="h-screen flex flex-col justify-between items-center"
              key={index}
              ref={refs[index]}
            >
              <button
                className="text-cyan-50 text-center bg-slate-50 w-12 h-12 rounded-full bg-opacity-60 p-1 mt-5"
                onClick={handleUp}
              >
                <img src="arrow.svg" />
              </button>
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
              <button
                className="text-cyan-50 text-center bg-slate-50 w-12 h-12 rounded-full bg-opacity-60 p-1 mb-5"
                onClick={handleDown}
              >
                <img src="arrow.svg" className=" rotate-180" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
