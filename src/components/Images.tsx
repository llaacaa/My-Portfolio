const Images: React.FC<{ src: string }> = (props) => {
  return (
    <div className="w-1/4 flex">
      <img src={props.src} className=" max-w-40 max-h-24" />
    </div>
  );
};

export default Images;
