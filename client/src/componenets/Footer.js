import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="footer">
        <div class="content has-text-centered">
          <div className="columns">
            <span> <Link className="navbar-item" to="/home">Home |</Link></span>
            <span> <Link className="navbar-item" to="/about">About Us |</Link></span>
            <span> <Link className="navbar-item" to="/donor">Donate </Link></span>
          </div>
          <p>© 2001-2020 Vistaprint. All rights reserved.</p>
        </div>
      </footer>
    );
}

export default Footer;