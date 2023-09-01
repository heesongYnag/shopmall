import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성복",
    "dived",
    "남성",
    "신생아/유아",
    "아동",
    "HnM Home",
    "Sale",
    "지속기능성",
  ];
  return (
    <div>
      <div class="login-button">
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div> 로그인</div>
      </div>

      <div className="nav-section">
        <img
          src="https://logos-world.net/wp-content/uploads/2023/05/Uno-Logo-500x281.png"
          width={100}
        ></img>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
