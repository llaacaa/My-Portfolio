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
        className="flex-col w-full rounded-2xl bg-slate-300 bg-opacity-50 pt-5"
      >
        <div className=" flex justify-end mr-10 relative mt-5">
          <motion.div
            className="border-2 border-black cursor-pointer absolute"
            onClick={() => props.onClick(false)}
            whileHover={{
              scale: 1.3,
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
        <div className="flex imagesPos  lg:py-5  justify-between" key={1}>
          <Images src="react.png" srcTo="https://react.dev/" />
          <Images src="redux.png" srcTo="https://redux.js.org/" />
          <Images src="next-js-logo.png" srcTo="https://nextjs.org/" />
        </div>
        <div className="flex imagesPos lg:py-5  justify-between" key={2}>
          <Images src="framer.svg" srcTo="https://www.framer.com/motion/" />
          <Images src="node.png" srcTo="https://nodejs.org/en" />
          <Images src="mongo.png" srcTo="https://www.mongodb.com/" />
        </div>
        <div className="flex imagesPos lg:py-5  justify-between" key={3}>
          <Images src="tailwind.png" srcTo="https://tailwindcss.com/" />
          <Images src="git.png" srcTo="https://git-scm.com/" />
          <Images
            src="tanstack.png"
            srcTo="https://tanstack.com/query/latest"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
