import Link from "./Link";

const Nav = () => {
  return (
    <>
      <nav id="nav">
        <ul>
          <Link navigateLink={"about-section"} link={"// About"} />
          <Link navigateLink={"expertise-section"} link={"// Expertise"} />
          <Link navigateLink={"skills-section"} link={"// Skills"} />
          {/* <Link link={"// Experience"} /> */}
          <Link link={"// Contact"} />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
