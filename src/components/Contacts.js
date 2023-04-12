import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Contacts = () => {
  return (
    <div>
      <p className="block-title">Contacts</p>
      <div className="contacts-container">
        <a
          href="https://github.com/arizonaenergy"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="github-icon" />
        </a>
        <a href="mailto:dara271@icloud.com">
          <GoMail className="github-icon" />
        </a>
      </div>
    </div>
  );
};
export default Contacts;
