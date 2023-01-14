/**
 * Two ways of exporting**
    1. export default Title; (Default Import), can rename after import
    2. second way is shown in the code, importing is different for this (Named Import), NO RENAME
 *
 */
export const Title = () => {
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
    </div>
  );
};

export default Header;
