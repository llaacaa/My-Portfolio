import ProjectComponent from "./Project";

type Project = {
  title: string;
  about: string;
};

const projects: Project[] = [
  {
    title: "CampSpotter",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
  {
    title: "Quiz App",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
  {
    title: "Project manager",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
  {
    title: "Tic Tac Toe",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
  {
    title: "Food Order App",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
  {
    title: "Event App",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus culpa alias numquam eos officia perspiciatis ex sint quae quo est, quis illum reprehenderit? Expedita nobis rerum dolore libero. Voluptatum?",
  },
];

export default function Projects() {
  return (
    <div>
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
