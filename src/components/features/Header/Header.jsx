import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let pages = ["About","Projects","ContactUs"]
  return (
    <div className="header">
      <Link to="/"><button>Home</button></Link>
      {pages.map(page=>
        <Link to={page}><button>{page}</button></Link>
        )}
    </div>
  );
};

export default Header;
