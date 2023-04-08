import { DiReact } from "react-icons/di";
import { CiDesktop } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";
const Content = () => {
  return (
    <div id="first-block" className="content">
      <h1 className="block-title">My Expertise</h1>
      <div className="skills-container">
        <div className="sides">
          <div className="side">
            <DiReact className="icons" />
            <p>Software Development</p>
          </div>

          <div>
            Experienced in both functional and OOP: Dart, Python, Java,
            JavaScript, TypeScript.
          </div>
        </div>

        {/* 2 side */}
        <div className="sides">
          <div className="side">
            <CiDesktop className="icons" />
            <p>Frontend Dev React</p>
          </div>
          <div>
            Passionate about UI/UX. Over 1 years of development experience in
            HTML, CSS, JS, React frameworks.
          </div>
        </div>

        {/* 3 side */}
        <div className="sides">
          <div className="side">
            <BsLightningCharge className="icons" />
            <p>Flutter Dev Android, iOS</p>
          </div>

          <div>
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the Flutter framework.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
