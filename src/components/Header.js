import Link from "./nav/Link";

const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about-section");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div>
        <h1>DARA MININA</h1>
        <h2>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</h2>
      </div>
      {/*  */}
      <div onClick={handleClickScroll} className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
