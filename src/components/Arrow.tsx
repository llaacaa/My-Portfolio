import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

const Arrow: React.FC<{
  onClick: (is: boolean) => void;
}> = (props) => {
  const [text, setText] = useState("Show all skills");

  const [scope, animate] = useAnimate();
  const [scopeText, animateText] = useAnimate();
  const handleAnimateStart = async () => {
    animate(scope.current, { rotate: 90 });
    animateText(scopeText.current, { scale: 1.2, color: "green" });
  };
  const handleAnimateEnd = async () => {
    animate(scope.current, { rotate: 180 });
    animateText(scopeText.current, { scale: 1, color: "black" });
  };

  return (
    <>
      <motion.div
        className="bg-slate-300 flex w-48 h-16  rounded-b-xl text-lg ml-auto cursor-pointer mr-5"
        onClick={() => props.onClick(true)}
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.6 },
        }}
        onHoverStart={() => {
          setText("Click me");
          handleAnimateStart();
        }}
        onHoverEnd={() => {
          setText("Show all skills");
          handleAnimateEnd();
        }}
      >
        <div className="w-1/4 flex">
          <motion.img
            ref={scope}
            id="target"
            src="up.png"
            className="w-10 rotate-180 mx-3"
          />
        </div>
        <div className="w-3/4 flex mx-2">
          <p ref={scopeText}>{text}</p>
        </div>
      </motion.div>
    </>
  );
};

export default Arrow;
