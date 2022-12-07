import logo from "./images/logo.svg";
const Header = () => {
  const handleClick = (index) => {};
  const handleMenu = () => {
    document.querySelector(".head").classList.toggle("show");
    document.querySelector(".menu").classList.toggle("close");
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Blogr's Logo" />
        </div>
        <div className="menu" onClick={handleMenu}></div>
        <div className="head">
          <ul>
            <li id="product">
              <button
                onClick={() => {
                  document
                    .querySelector("#product>ul")
                    .classList.toggle("show");
                }}
              >
                Product
              </button>
              <ul>
                <li>
                  <a href="/">Overview</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Marketplace</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Integrations</a>
                </li>
              </ul>
            </li>
            <li id="company">
              <button
                onClick={() => {
                  document
                    .querySelector("#company>ul")
                    .classList.toggle("show");
                }}
              >
                Company
              </button>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
              </ul>
            </li>
            <li id="connect">
              <button
                onClick={() => {
                  document
                    .querySelector("#connect>ul")
                    .classList.toggle("show");
                }}
              >
                Connect
              </button>
              <ul>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Newsletter</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="links">
            <a href="/">Login</a>
            <a href="/">Sign Up</a>
          </div>
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
