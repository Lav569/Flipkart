import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
// import Buttons from "../Buttons/Buttons";
const NavbarOption=[
  "Login","Be a seller","More","Cart"
]
const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="navbar_heading">
          <p>Flipkart</p>
        </div>
        <div className="navbar_input">
          <input
            type="search"
            className="navbar_left_input"
            placeholder="Search for products, brands and more"
          />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="navbar_right">
        {/* <Buttons value={NavbarOption[0] } /> */}
        {NavbarOption.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};
export default Navbar;