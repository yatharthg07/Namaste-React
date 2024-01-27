import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                if (btnName === "login") setbtnName("logout");
                else if (btnName === "logout") setbtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
