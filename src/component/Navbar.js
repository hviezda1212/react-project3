import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M Home",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  let [width, setWidth] = useState(0);

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="top-area"></div>
      <div className="nav-section">
        <div className="left-button-area hide-rev">
          <div className="burger-menu hide">
            <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
          </div>
          <div>고객 서비스</div>
          <div>뉴스레터</div>
          <div>매장 찾기</div>
        </div>
        <img
          onClick={goToMain}
          width={100}
          src={`${process.env.PUBLIC_URL}/H&M-Logo.png`}
        />
        <div className="right-button-area">
          {authenticate ? (
            <div
              className="login-button"
              onClick={() => setAuthenticate(false)}
            >
              <FontAwesomeIcon icon={faUser} />
              <span className="hide-rev" style={{ cursor: "pointer" }}>로그아웃</span>
            </div>
          ) : (
            <div className="login-button" onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span className="hide-rev" style={{ cursor: "pointer" }}>로그인</span>
            </div>
          )}
          <div className="like-button">
            <FontAwesomeIcon icon={faHeart} />
            <div className="hide-rev">즐겨찾기</div>
          </div>
        </div>
      </div>
      <div className="menu-area">
        <ul className="menu-list hide-rev">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
