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
      <div className="lg:flex overflow-x-hidden" ref={projectRef}>
        <motion.div
          className=" text-cyan-300 play-bold lg:w-1/3 textProject small-m lg:text-2xl"
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p>{props.about}</p>
        </motion.div>
        <motion.div
          className="lg:w-2/3 pl-10 overflow-hidden sm:my-3"
          initial={{ opacity: 0, x: 300 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <a href={props.page}>
            <motion.img
              src={props.src}
              alt="picture"
              className=" rounded-l-3xl images object-cover w-full h-full "
              whileHover={{ x: 50, transition: { delay: 0.3 } }}
            />
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="lg:flex overflow-x-hidden" ref={projectRef}>
      <motion.div
        className="lg:w-2/3  pr-10 overflow-hidden sm:my-3 "
        initial={{ opacity: 0, x: -300 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <a href={props.page}>
          <motion.img
            alt="picture"
            src={props.src}
            className=" rounded-r-3xl images object-cover w-full h-full "
            whileHover={{ x: -50, transition: { delay: 0.3 } }}
          />
        </a>
      </motion.div>
      <motion.div
        className=" text-cyan-300 play-bold lg:w-1/3 textProject small-m lg:text-2xl"
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
