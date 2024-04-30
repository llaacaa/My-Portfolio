import Arrow from "./Arrow";
import Images from "./Images";

const Skills: React.FC<{ onClick: (is: boolean) => void }> = (props) => {
  return (
    <>
      <Arrow onClick={props.onClick} upSideDown={true} />
      <div className="flex">
        <div
          className="flex-col w-1/2 rounded-t-2xl bg-slate-500 bg-opacity-50 pt-5"
          onMouseLeave={() => props.onClick(false)}
        >
          <div className="text-center text-5xl"></div>
          <div className="flex py-5 justify-between">
            <Images src="react.png" />
            <Images src="redux.png" />
            <Images src="next-js-logo.png" />
          </div>
          <div className="flex py-5 justify-between">
            <Images src="framer.svg" />
            <Images src="node.png" />
            <Images src="mongo.png" />
          </div>
          <div className="flex py-5 justify-between">
            <Images src="tailwind.png" />
            <Images src="git.png" />
            <Images src="tanstack.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
