const ProjectComponent: React.FC<{
  title: string;
  about: string;
  index: number;
}> = (props) => {
  if (props.index % 2 === 0) {
    return (
      <div className="flex">
        <div className=" text-cyan-50 w-1/3">
          <h2>{props.title}</h2>
          <p>{props.about}</p>
        </div>
        <div className="w-2/3">
          <img src="framer.svg" alt="picture" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="w-2/3">
        <img alt="picture" src="framer.svg" />
      </div>
      <div className=" text-cyan-50 w-1/3">
        <h2>{props.title}</h2>
        <p>{props.about}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
