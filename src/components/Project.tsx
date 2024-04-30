const ProjectComponent: React.FC<{
  title: string;
  about: string;
  index: number;
}> = (props) => {
  if (props.index % 2 === 0) {
    return (
      <div className="flex">
        <div className=" text-cyan-50 ">
          <h2>{props.title}</h2>
          <p>{props.about}</p>
        </div>
        <div>
          <img src="framer.svg" alt="picture" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div>
        <img alt="picture" src="framer.svg" />
      </div>
      <div className=" text-cyan-50">
        <h2>{props.title}</h2>
        <p>{props.about}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
