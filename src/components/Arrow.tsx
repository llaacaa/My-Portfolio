const Arrow: React.FC<{
  onClick: (is: boolean) => void;
  upSideDown: boolean;
}> = (props) => {
  if (!props.upSideDown) {
    return (
      <div className="flex">
        <div
          className="bg-slate-300 w-16 flex pt-2  rounded-t-xl"
          onMouseEnter={() => props.onClick(true)}
        >
          <img src="up.png" className=" w-10" />
        </div>
      </div>
    );
  }
};

export default Arrow;
