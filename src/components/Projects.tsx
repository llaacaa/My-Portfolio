import ProjectComponent from "./Project";

type Project = {
  title: string;
  about: string;
};

const projects: Project[] = [
  {
    title: "CampSpotter",
    about:
      "This is a simple CRUD application that is implemented using vanilla javascript and node.js. It has basic user authentication using sessions and cookies. Users can create, review, edit and delete camp spots.",
  },
  {
    title: "Quiz App",
    about:
      "Quiz app is one of the first apps I built using React. It prompts user for his name and then the quiz starts. Questions are shuffled before and for every question you there is a timer shown to see how many secounds are remaining for the active question. If the question is correct the selected answer turns green otherwise red, and you can see a timer to see when the next question begins. When the quiz is finished you can see which questions were answered correctly and incorrectly. There is also a made statistic for the quiz.",
  },
  {
    title: "Project manager",
    about:
      "Create projects and add or delete tasks from it. Created using React and styled using Tailwind CSS",
  },
  {
    title: "Tic Tac Toe",
    about:
      "Classic Tic Tac Toe game created using React. First you get promped for players name and then the game starts. When the game is finished a modal is shown to display the game outcome.",
  },
  {
    title: "Food Order App",
    about:
      "An application made for the foodies. You can order meals that are fetched from the backend and stored in the cart component. When you are finished ordering you can click on the cart to get the details of your order. You can see the quantity and the price of the order that is inquired. The frontend is made in React with React Router and the meals are fetched from the backend made in Node.js.",
  },
  {
    title: "Event App",
    about:
      "This is an event management app that helps people manage their upcoming events. All available events are fetched from the backend and shown on All Events. Users can create, update and delete events as they please. An event has information about the title, date and some pictures that describe the event. The application is made in React, with Tanstack Query and Node.js as the backend.",
  },
];

export default function Projects() {
  return (
    <div className=" mx-12">
      {projects.map((item: Project, index: number) => {
        return (
          <ProjectComponent
            key={index}
            title={item.title}
            about={item.about}
            index={index}
          />
        );
      })}
    </div>
  );
}
