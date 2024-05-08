import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import Arrow from "../components/Arrow";
import Skills from "../components/Skills";

const myText: string[] = [
  "Proficient knowledge in javascript and typescript, MVC architecture, async concurrent programming in TypeScript and JavaScript and problem solving",
  "I am a socially active person who likes to explore and exeperience a lot of different activities. Beside coding which I very much enjoy, I like to workout and play football. Because my extensive hunger for knowledge I really enjoy reading. I'm also currently learning Spanish. I also am a really big Star Wars fan therefore the theme of the site. Last but not least something that I do everyday, even while writing this, I listen to music. ",
  "While I don’t possess extensive work experience, I am intrigued by the pursuit of knowledge and gaining practical skills. My involvement in projects during Hackathons, projects that I put up github and school projects such as software for creating UML diagrams, allowed me to demonstrate my abilities in critical thinking and collaborative teamwork. These experiences trained my approach to problem-solving and working effectively within a group.",
];

const education = (
  <ul>
    <li>High School Diploma in Electrical Engineering</li>
    <li className="ml-10">- September 2018 - June 2022 </li>
    <li>Faculty of Computing, Union University, Belgrade</li>
    <li className="ml-10">
      - October 2022 - Expected Graduation Date - June 2026
    </li>
  </ul>
);

const AboutMePage: React.FC<{
  activePage: number;
  aboutMeText: number;
  setAboutMeText: (num: number) => void;
  setShowSkills: (is: boolean) => void;
  showSkills: boolean;
}> = (props) => {
  return (
    <div className="about play-bold flex text-2xl items-start mt-32 mb-32">
      <motion.div
        className="lg:w-2/3  about play-bold  text-2xl items-start prob  mb-32"
        initial={{ opacity: 0, y: -200 }}
        animate={props.activePage === 1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex justify-start mb-3">
          <div className="relative lg:mx-2  md:mx-1 sm:mx-1">
            <Button
              onClick={() => {
                props.setAboutMeText(0);
              }}
              isActive={props.aboutMeText === 0}
            >
              Expertise
            </Button>
            {props.aboutMeText === 0 && (
              <motion.div
                layoutId="tab-indicator-1"
                className="active-tab-indicator-about"
              />
            )}
          </div>
          <div className="relative lg:mx-2 md:mx-1 sm:mx-1">
            <Button
              onClick={() => {
                props.setAboutMeText(2);
                props.setShowSkills(false);
              }}
              isActive={props.aboutMeText === 2}
            >
              Experience
            </Button>
            {props.aboutMeText === 2 && (
              <motion.div
                layoutId="tab-indicator-1"
                className="active-tab-indicator-about"
              />
            )}
          </div>
          <div className="relative lg:mx-2 md:mx-1 sm:mx-1">
            <Button
              onClick={() => {
                props.setAboutMeText(3);
                props.setShowSkills(false);
              }}
              isActive={props.aboutMeText === 3}
            >
              Education
            </Button>
            {props.aboutMeText === 3 && (
              <motion.div
                layoutId="tab-indicator-1"
                className="active-tab-indicator-about"
              />
            )}
          </div>
          <div className="relative lg:mx-2">
            <Button
              onClick={() => {
                props.setAboutMeText(1);
                props.setShowSkills(false);
              }}
              isActive={props.aboutMeText === 1}
            >
              Personal Life
            </Button>
            {props.aboutMeText === 1 && (
              <motion.div
                layoutId="tab-indicator-1"
                className="active-tab-indicator-about"
              />
            )}
          </div>
        </div>

        <motion.div
          className=" border-4   rounded-xl lg:p-3 md:p-2 sm:p-1"
          key={props.aboutMeText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-cyan-100 text-3xl aboutMe">
            {props.aboutMeText !== 3 ? myText[props.aboutMeText] : education}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          {props.showSkills && props.aboutMeText === 0 && (
            <Skills onClick={props.setShowSkills} />
          )}
        </AnimatePresence>

        {!props.showSkills && props.aboutMeText === 0 && (
          <Arrow onClick={props.setShowSkills} />
        )}
      </motion.div>
    </div>
  );
};
export default AboutMePage;
