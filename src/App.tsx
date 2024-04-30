import { useState } from "react";
import Button from "./components/Button";
import Skills from "./components/Skills";
import Arrow from "./components/Arrow";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Projects from "./components/Projects";

function App() {
  const [aboutMeText, setAboutMeText] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore neque ipsam quis ipsa nobis totam ea placeat dolor natus alias aspernatur aut nostrum, temporibus architecto reiciendis eum. Mollitia, natus?"
  );

  const [showSkills, setShowSkills] = useState(false);

  return (
    <>
      <div className="z-10 relative">
        <div className=" h-screen flex font-mono">
          <div className="m-5">
            <img src="LazarKojic.JPG" alt="My photo" className="rounded-lg" />
          </div>
          <div className="m-5 ">
            <p className=" text-cyan-300 max-w-80  text-3xl">
              <span>Projects</span> <span>Skills</span> <span>About me</span>
            </p>
          </div>
        </div>

        <Projects />

        <div className="about play-bold flex code-background text-2xl">
          <div className=" w-1/4 h-full"></div>
          <div className="w-3/6">
            <Button
              onClick={() => {
                setAboutMeText(
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore neque ipsam quis ipsa nobis totam ea placeat dolor natus alias aspernatur aut nostrum, temporibus architecto reiciendis eum. Mollitia, natus?"
                );
              }}
            >
              My Goals
            </Button>
            <Button
              onClick={() => {
                setAboutMeText("Skills");
              }}
            >
              Personal Life
            </Button>
            <Button
              onClick={() => {
                setAboutMeText("Experience");
              }}
            >
              Experience
            </Button>
            <div className=" border-4 p-3 m-3 rounded-xl">
              <p className="text-cyan-100">{aboutMeText}</p>
            </div>
          </div>
          <div className="bg-yellow-400 w-1/4"></div>
        </div>

        {showSkills ? (
          <Skills onClick={setShowSkills} />
        ) : (
          <Arrow onClick={setShowSkills} upSideDown={false} />
        )}

        <div className="flex bg-slate-300">
          <img src="github.png" className="m-5" />
          <img src="instagram.png" className="m-5" />
          <img src="linkedin.png" className="m-5" />
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
