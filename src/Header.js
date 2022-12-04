import logo from "./images/logo.svg";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Blogr's Logo" />
        </div>
        <ul>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">Connect</a>
          </li>
        </ul>
        <div className="links">
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </nav>
      <div className="header-title">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="header-title-links">
          <a href="/">Start for Free</a>
          <a href="/">Learn More</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
