import { motion } from "framer-motion";

const Button: React.FC<{
  children: string;
  onClick: () => void;
  isActive: boolean;
}> = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      className=" bg-green-400 buttons-about w-max"
      whileHover={{ y: -5, scale: 1.2 }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
