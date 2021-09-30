import React from "react";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="ui fixed menu">
        <Link to="/">
      <div className="ui container center">
        <h2>XShop</h2>
      </div>
      </Link>
    </div>
  );
}

export default Header;
