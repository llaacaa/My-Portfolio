import { AnimatePresence, motion } from "framer-motion";
import Images from "./Images";

const Skills: React.FC<{ onClick: (is: boolean) => void }> = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -30 }}
        className="flex-col w-full rounded-2xl bg-slate-500 bg-opacity-50 pt-5"
      >
        <div className=" flex justify-end mr-10">
          <motion.div
            className="relative border-2 border-black cursor-pointer"
            onClick={() => props.onClick(false)}
            whileHover={{
              scale: 1.3,
              borderRadius: 10,
              transition: { duration: 0.3 },
            }}
          >
            <AnimatePresence>
              <motion.img
                key="first line"
                src="cross.svg"
                className="h-10 w-10 absolute"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 45,
                  transition: { duration: 0.2, delay: 0.3 },
                }}
                exit={{ rotate: 0 }}
              />
              <motion.img
                key="secound line"
                src="cross.svg"
                className="w-10 h-10"
                initial={{ rotate: 0 }}
                animate={{
                  rotate: -45,
                  transition: { duration: 0.2, delay: 0.3 },
                }}
                exit={{ rotate: 0 }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="flex py-5 justify-between" key={1}>
          <Images src="react.png" />
          <Images src="redux.png" />
          <Images src="next-js-logo.png" />
        </div>
        <div className="flex py-5 justify-between" key={2}>
          <Images src="framer.svg" />
          <Images src="node.png" />
          <Images src="mongo.png" />
        </div>
        <div className="flex py-5 justify-between" key={3}>
          <Images src="tailwind.png" />
          <Images src="git.png" />
          <Images src="tanstack.png" />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
