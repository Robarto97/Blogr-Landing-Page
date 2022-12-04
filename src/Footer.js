import logo from "./images/logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="Blogr's logo" />
      </div>
      <div className="footer-links">
        <ul className="product">
          <li>
            <a href="/">Product</a>
          </li>
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
        <ul className="company">
          <li>
            <a href="/">Company</a>
          </li>
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
        <ul className="connect">
          <li>
            <a href="/">Connect</a>
          </li>
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
      </div>
    </footer>
  );
};

export default Footer;
