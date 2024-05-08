import HomeButton from "../components/HomeButton";
import { useTypewriter } from "react-simple-typewriter";

const HomePage: React.FC<{
  showText: boolean;
  handleAboutClick: () => void;
  handleProjectClick: () => void;
  setShowModal: (is: boolean) => void;
}> = (props) => {
  const [text] = useTypewriter({
    words: [
      "Hello my name is Lazar, I am a web developer from Serbia who studies at Faculty of Computing in Belgrade.",
    ],
    typeSpeed: 30,
  });

  return (
    <div className="h-screen flex flex-col font-mono w-full homepage">
      <div className="m-5 md:w-1/2 lg:w-1/2 text-cyan-300 ">
        <p className=" md:text-2xl  h-20 w-full lg:text-3xl md:h-24 lg:min-h-20">
          {text}
        </p>
      </div>
      (
      <div className="text-cyan-300 flex min-h-32">
        {props.showText && (
          <>
            <HomeButton handleOnClick={props.handleAboutClick} delay={1}>
              ABOUT ME
            </HomeButton>
            <HomeButton handleOnClick={props.handleProjectClick} delay={1.5}>
              PROJECTS
            </HomeButton>
            <HomeButton
              handleOnClick={() => props.setShowModal(true)}
              delay={2}
            >
              CONTACT
            </HomeButton>
          </>
        )}
      </div>
      )
    </div>
  );
};

export default HomePage;
