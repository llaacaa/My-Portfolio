import { motion } from "framer-motion";

const Images: React.FC<{ src: string; srcTo: string }> = (props) => {
  return (
    <div className="w-1/3 flex">
      <a href={props.srcTo} target="_blank">
        <motion.img
          src={props.src}
          className="max-w-40 max-h-24 skillsImg"
          whileHover={{ scale: 1.3 }}
        />
      </a>
    </div>
  );
};

export default Images;
