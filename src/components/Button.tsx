const Button: React.FC<{ children: string; onClick: () => void }> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className=" bg-green-400 m-2 px-8 py-1 text-3xl"
    >
      {props.children}
    </button>
  );
};

export default Button;
