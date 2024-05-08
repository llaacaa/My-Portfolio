import { motion, useAnimate } from "framer-motion";

const HomeButton: React.FC<{
  children: string;
  handleOnClick: () => void;
  delay: number;
}> = (props) => {
  const [scope, animate] = useAnimate();

  const handleHoverStart = () => {
    animate(scope.current, { scale: 1.5, textDecorationColor: "cyan" });
  };

  const handleHoverEnd = () => {
    animate(scope.current, { scale: 1, textDecorationColor: "transparent" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay, duration: 0.5 }}
      className="mx-5  home-buttons md:text-2xl md:mx-10 lg:text-3xl lg:mx-10 w-se"
      onClick={props.handleOnClick}
      ref={scope}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        textDecoration: "underline",
        textDecorationColor: "transparent",
      }}
    >
      {props.children}
    </motion.button>
  );
};

export default HomeButton;
