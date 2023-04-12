const Work = () => {
  return (
    <div id="skills-section" className="container-work">
      <div>
        <h1 className="block-title">My Skills</h1>
      </div>
      <div className="rightside">
        <div className="skill-wrapper">
          <div>
            <p style={{ color: "#f5f5f4" }}>HTML</p>
            <div className="cont">
              <div className="skills html">90%</div>
            </div>
          </div>
          <div>
            <p style={{ color: "#f5f5f4" }}>CSS</p>
            <div className="cont">
              <div className="skills css">85%</div>
            </div>
          </div>
        </div>
        <div className="skill-wrapper">
          <div>
            <p style={{ color: "#f5f5f4" }}>JavaScript</p>
            <div className="cont">
              <div className="skills js">70%</div>
            </div>
          </div>
          <div>
            <p style={{ color: "#f5f5f4" }}>React</p>
            <div className="cont">
              <div className="skills react">75%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
