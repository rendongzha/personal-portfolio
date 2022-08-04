import classes from "./Navbar.module.css";
import image from "../images/logo.png";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <img src={image} alt="" className={classes.logo} />
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a href="#welcome">About</a>
          </li>
          <li>
            <a href="#projects">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
