import Modal from "./Modal";

const Contact: React.FC<{ onClose: () => void; handleClick: () => void }> = (
  props
) => {
  return (
    <Modal onClose={props.onClose} title="Contact">
      <div className="flex bg-slate-300 p-3">
        <a href="https://github.com/llaacaa">
          <img src="github.png" className="mx-5 max-h-10" />
        </a>
        <img
          src="email.png"
          onClick={props.handleClick}
          className="mx-5 max-h-10"
        />

        <a href="https://www.linkedin.com/in/lazar-kojic-51b87a2b2/">
          <img src="linkedin.png" className="mx-5 max-h-10" />
        </a>
      </div>
    </Modal>
  );
};

export default Contact;
