import Link from "./Link";

const Nav = ({}) => {
  return (
    <>
      <nav id="nav">
        <ul>
          <Link link={"// Home"} />
          <Link link={"// Expertise"} />
          <Link link={"// Work"} />
          <Link link={"// Experience"} />
          <Link link={"// Contact"} />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
