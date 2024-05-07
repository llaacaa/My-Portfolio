import { AnimatePresence, motion } from "framer-motion";

const Navigation: React.FC<{
  handleHomeClick: () => void;
  handleProjectClick: () => void;
  handleAboutClick: () => void;
  activePage: number;
  handleClick: () => void;
  isNavActive: boolean;
}> = (props) => {
  const classes = "sticky top-0 z-10 flex  text-center w-2/5 h-14 pt-2";

  const buttonsClass = "mx-10 text-2xl text-cyan-300";

  return (
    <nav className={classes}>
      <AnimatePresence>
        {!props.isNavActive && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, x: -50 }}
            className="flex"
          >
            <div>
              <motion.button
                className={buttonsClass}
                onClick={props.handleHomeClick}
                whileHover={{
                  scale: 1.4,
                }}
                whileTap={{ scale: 1.4 }}
              >
                HOME
              </motion.button>
              {props.activePage === 0 && (
                <motion.div
                  layoutId="tab-indicator"
                  className="active-tab-indicator"
                />
              )}
            </div>
            <div>
              <motion.button
                className={buttonsClass}
                onClick={props.handleAboutClick}
                whileHover={
                  props.activePage !== 1
                    ? {
                        scale: 1.4,
                      }
                    : {}
                }
                whileTap={{ scale: 1.4 }}
              >
                ABOUT ME
              </motion.button>
              {props.activePage === 1 && (
                <motion.div
                  layoutId="tab-indicator"
                  className="active-tab-indicator"
                />
              )}
            </div>
            <div>
              <motion.button
                className={buttonsClass}
                onClick={props.handleProjectClick}
                whileHover={
                  props.activePage !== 2
                    ? {
                        scale: 1.4,
                      }
                    : {}
                }
                whileTap={{ scale: 1.4 }}
              >
                PROJECTS
              </motion.button>
              {props.activePage === 2 && (
                <motion.div
                  layoutId="tab-indicator"
                  className="active-tab-indicator"
                />
              )}
            </div>
            <div>
              <motion.button
                className={buttonsClass}
                onClick={() => props.handleClick()}
                whileHover={{
                  scale: 1.4,
                }}
                whileTap={{ scale: 1.4 }}
              >
                CONTACT
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
