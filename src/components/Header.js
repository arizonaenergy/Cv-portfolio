import Link from "./nav/Link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link link={"// Home"} />
          <Link link={"// Expertise"} />
          <Link link={"// Work"} />
          <Link link={"// Experience"} />
          <Link link={"// Contact"} />
        </ul>
      </nav>
      <div>
        <h1>
          Expert Software Developer: Building Innovative Solutions with
          Cutting-Edge Technologies
        </h1>
      </div>
    </header>
  );
};

export default Header;
