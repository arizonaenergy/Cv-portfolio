const Link = ({ link, navigateLink }) => {
  const onClickHandle = () => {
    const element = document.getElementById(navigateLink);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <li onClick={onClickHandle}>
        <a className="effect-2">{link}</a>
      </li>
    </>
  );
};

export default Link;
