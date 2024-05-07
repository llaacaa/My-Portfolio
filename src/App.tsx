import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import Skills from "./components/Skills";
import Arrow from "./components/Arrow";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Projects from "./components/Projects";
import { useTypewriter } from "react-simple-typewriter";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

const myText: string[] = [
  "Proficient knowledge in javascript and typescript, MVC architecture, async concurrent programming and problem solving",
  "I am a socially active person who likes to explore and exeperience a lot of different activities. Beside coding which I very much enjoy, I like to workout and play football. Because my extensive hunger for knowledge I really enjoy reading. I'm also currently learning Spanish. I also am a really big Star Wars fan therefore the theme of the site. Last but not least something that I do everyday, even while writing this, I listen to music. ",
  "While I don’t possess extensive work experience, I am intrigued by the pursuit of knowledge and gaining practical skills. My involvement in projects during Hackathons, projects that I put up github and school projects such as software for creating UML diagrams, allowed me to demonstrate my abilities in critical thinking and collaborative teamwork. These experiences trained my approach to problem-solving and working effectively within a group.",
];

function App() {
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const aboutMeRefButtons = useRef<HTMLDivElement>(null);
  const isInViewAboutMeButtonsDiv = useInView(aboutMeRefButtons);

  const [showModal, setShowModal] = useState(false);

  const [aboutMeText, setAboutMeText] = useState(0);

  const [showSkills, setShowSkills] = useState(false);

  const [showText, setShowText] = useState(false);

  const [activePage, setActivePage] = useState(0);

  const homeP = useRef<HTMLDivElement>(null);
  const isNavActive = useInView(homeP);

  document.body.style.overflow = "hidden";

  const [text] = useTypewriter({
    words: [
      "Hello my name is Lazar, I am a web developer from Serbia who studies at Faculty of Computing in Belgrade.",
    ],
    typeSpeed: 30,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 4000);
  }, []);

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

  const handleClick = () => {
    const emailAddress = "lazarkojic632@gmail.com";
    const subject = "Hey there Lazar";
    const body = "Body of the email";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleShowModal = () => {
    setShowModal(true);
    const modal = document.getElementById("modal");
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    modal!.style.left = `${viewportCenterX}px`;
    modal!.style.top = `${viewportCenterY}px`;

    modal!.style.display = "block";
  };

  const handleHomeClick = () => {
    setActivePage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    setActivePage(1);
    aboutMeRef.current!.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectClick = () => {
    setActivePage(2);
    projectRef.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="z-10 relative">
        {
          <Navigation
            handleHomeClick={handleHomeClick}
            handleAboutClick={handleAboutClick}
            handleProjectClick={handleProjectClick}
            activePage={activePage}
            isNavActive={isNavActive}
            handleClick={handleShowModal}
          />
        }
        <AnimatePresence>
          {showModal && (
            <Contact
              onClose={() => setShowModal(false)}
              handleClick={handleClick}
            />
          )}
        </AnimatePresence>
        <div className=" h-screen flex flex-col font-mono">
          <div className="m-5 w-1/2 text-cyan-300 ">
            <p className="text-3xl  h-20 w-full" ref={homeP}>
              {text}
            </p>
          </div>
          (
          <div className="text-cyan-300 flex h-32">
            {showText && (
              <>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-10 text-2xl home-buttons "
                  onClick={handleAboutClick}
                  whileHover={{
                    scale: 1.4,
                    textDecoration: "underline",
                  }}
                >
                  ABOUT ME
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                  className="mx-10 text-2xl home-buttons "
                  onClick={handleProjectClick}
                  whileHover={{
                    scale: 1.4,
                    textDecoration: "underline",
                  }}
                >
                  PROJECTS
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
                  className="mx-10 text-2xl home-buttons "
                  onClick={() => setShowModal(true)}
                  whileHover={{
                    scale: 1.4,
                    textDecoration: "underline",
                  }}
                >
                  CONTACT
                </motion.button>
              </>
            )}
          </div>
          )
        </div>
        <div className=" h-screen"></div>
        <div ref={aboutMeRef} className=" border-gray-400 mx-32"></div>
        <div
          className="about play-bold flex text-2xl items-start prob mt-64 mb-32"
          ref={aboutMeRefButtons}
        >
          <motion.div
            className="w-2/3"
            initial={{ opacity: 0, y: -200 }}
            animate={isInViewAboutMeButtonsDiv ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex justify-start mb-2">
              <div className="relative">
                <Button
                  onClick={() => {
                    setAboutMeText(0);
                  }}
                >
                  Expertise
                </Button>
                {aboutMeText === 0 && (
                  <motion.div
                    layoutId="tab-indicator-1"
                    className="active-tab-indicator-about"
                  />
                )}
              </div>
              <div className="relative">
                <Button
                  onClick={() => {
                    setAboutMeText(2);
                  }}
                >
                  Experience
                </Button>
                {aboutMeText === 2 && (
                  <motion.div
                    layoutId="tab-indicator-1"
                    className="active-tab-indicator-about"
                  />
                )}
              </div>
              <div className="relative">
                <Button
                  onClick={() => {
                    setAboutMeText(3);
                  }}
                >
                  Education
                </Button>
                {aboutMeText === 3 && (
                  <motion.div
                    layoutId="tab-indicator-1"
                    className="active-tab-indicator-about"
                  />
                )}
              </div>
              <div className="relative">
                <Button
                  onClick={() => {
                    setAboutMeText(1);
                  }}
                >
                  Personal Life
                </Button>
                {aboutMeText === 1 && (
                  <motion.div
                    layoutId="tab-indicator-1"
                    className="active-tab-indicator-about"
                  />
                )}
              </div>
            </div>
            <motion.div
              className=" border-4   rounded-xl p-3"
              key={aboutMeText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-cyan-100 text-3xl">
                {aboutMeText !== 3 ? myText[aboutMeText] : education}
              </p>
            </motion.div>
            <AnimatePresence mode="wait">
              {showSkills && aboutMeText === 0 && (
                <Skills onClick={setShowSkills} />
              )}
            </AnimatePresence>

            {!showSkills && aboutMeText === 0 && (
              <Arrow onClick={setShowSkills} />
            )}
          </motion.div>
        </div>
        <div className=" h-screen"></div>
        <div ref={projectRef}>
          <Projects />
        </div>
      </div>
      <div className="fixed top-0 left-0 z-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={2}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
