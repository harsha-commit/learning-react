import { useState } from "react";

const loggedInUser = () => {
  return true;
};

export const Title = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? <button>Log out</button> : <button>Login</button>}
    </div>
  );
};

export default Header;
