import { useEffect, useRef, useState } from "react";

import Projects from "./components/Projects";

import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

import HomePage from "./pages/Home";
import AboutMePage from "./pages/AboutMe";
import BackGroundStars from "./components/BackGroundStars";

function App() {
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 4000);
  }, []);

  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [showModal, setShowModal] = useState(false);

  const [aboutMeText, setAboutMeText] = useState(0);

  const [showSkills, setShowSkills] = useState(false);

  const [showText, setShowText] = useState(false);

  let num = localStorage.getItem("page");

  if (!num) {
    num = "0";
  }

  const [activePage, setActivePage] = useState(parseInt(num));

  useEffect(() => {
    localStorage.setItem("page", activePage.toString()); // Update localStorage whenever activePage changes
    if (showSkills && activePage !== 1) {
      setShowSkills(false);
    }
  }, [activePage, showSkills]);

  document.body.style.overflow = "hidden";

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
  };

  const handleAboutClick = () => {
    setActivePage(1);
  };
  const handleProjectClick = () => {
    if (activePage !== 2) {
      setActivePage(2);
    }
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
        //homepage
        {activePage === 0 && (
          <HomePage
            handleAboutClick={handleAboutClick}
            handleProjectClick={handleProjectClick}
            showText={showText}
            setShowModal={setShowModal}
          />
        )}
        {activePage === 1 && (
          <AboutMePage
            activePage={activePage}
            aboutMeText={aboutMeText}
            setAboutMeText={setAboutMeText}
            setShowSkills={setShowSkills}
            showSkills={showSkills}
          />
        )}
        {activePage === 2 && <Projects refs={refs} />}
      </div>
      <BackGroundStars />
    </>
  );
}

export default App;
