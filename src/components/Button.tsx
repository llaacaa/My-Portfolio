const Button: React.FC<{ children: string; onClick: () => void }> = (props) => {
  return (
    <button onClick={props.onClick} className=" bg-green-300 m-2 px-8 py-1">
      {props.children}
    </button>
  );
};

export default Button;
