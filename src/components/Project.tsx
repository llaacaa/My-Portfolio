import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectComponent: React.FC<{
  title: string;
  about: string;
  index: number;
  src: string;
  page: string;
}> = (props) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectRef);

  if (props.index % 2 === 0) {
    return (
      <div className="flex overflow-x-hidden" ref={projectRef}>
        <motion.div
          className=" text-cyan-300 play-bold w-1/3 text-3xl"
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p>{props.about}</p>
        </motion.div>
        <motion.div
          className="w-2/3 pl-10 overflow-hidden"
          initial={{ opacity: 0, x: 300 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <a href={props.page}>
            <img
              src={props.src}
              alt="picture"
              className=" rounded-lg images object-cover w-full h-full"
            />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex overflow-x-hidden" ref={projectRef}>
      <motion.div
        className="w-2/3 pr-10 overflow-hidden"
        initial={{ opacity: 0, x: -300 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <a href={props.page}>
          <img
            alt="picture"
            src={props.src}
            className=" rounded-lg images object-cover w-full h-full"
          />
        </a>
      </motion.div>
      <motion.div
        className=" text-cyan-300 play-bold w-1/3 text-3xl"
        initial={{ opacity: 0, x: 150 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p>{props.about}</p>
      </motion.div>
    </div>
  );
};

export default ProjectComponent;
