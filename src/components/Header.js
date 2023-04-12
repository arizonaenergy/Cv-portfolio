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
        {/* add animation from left */}
        <h1 className="header-title">DARA MININA</h1>
        {/* add animation from right */}
        <h2 className="header-sub">
          SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
        </h2>
      </div>
      <div onClick={handleClickScroll} className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
