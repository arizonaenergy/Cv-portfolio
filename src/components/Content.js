import { DiReact } from "react-icons/di";
import { CiDesktop } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";
const Content = () => {
  return (
    <div id="expertise-section" className="content">
      <h1 className="block-title">My Expertise</h1>
      <div className="skills-container">
        <div className="sides">
          <div className="side">
            <CiDesktop className="icons" />
            <p>Software Development</p>
          </div>

          <div className="subtitle">
            <p>
              I have the knowledge of Html, Css, Javascript, React, Write tests.
            </p>
          </div>
        </div>

        {/* 2 side */}
        <div className="sides">
          <div className="side">
            <DiReact className="icons" />
            <p>Frontend Dev React</p>
          </div>
          <div className="subtitle">
            <p>
              I have knowledge of React framework. Props, Hooks Redux and etc.
            </p>
          </div>
        </div>

        {/* 3 side */}
        <div className="sides">
          <div className="side">
            <BsLightningCharge className="icons" />
            <p>A Knowledge of UI / UX</p>
          </div>

          <div className="subtitle">
            <p>
              I have the knowledge of UI UX experience, how the site worked also
              how make it faster and user friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
