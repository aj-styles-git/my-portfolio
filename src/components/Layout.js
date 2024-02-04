import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Layout(props) {
    const location = useLocation();
    const path = location.pathname;
    return (
      <>
        {/* Main Container Start */}
        <div className="main-container">
          {/* Aside Start */}
          <div className="aside">
            <div className="logo">
              <a href="#"><span>A</span>tlas</a>
            </div>
            <div className="nav-toggler">
  
            </div>
            <ul className="nav">
              <li><a as={Link} href="/" className={path == "/" && "active"}><i className="fa fa-home"></i> Home</a></li>
              <li><a as={Link} href="/about" className={path == "/about" && "active"}><i className="fa fa-user"></i> About</a></li>
              <li><a as={Link} href="/service" className={path == "/service" && "active"}><i className="fa fa-list"></i> Services</a></li>
              <li><a as={Link} href="/portfolio" className={path == "/portfolio" && "active"}><i className="fa fa-briefcase"></i> Portfolio</a></li>
              <li><a as={Link} href="/contact" className={path == "/contact" && "active"}><i className="fa fa-comments"></i> Contact</a></li>
            </ul>
          </div>
          {/* Aside End */}
          {/* Main Content Start */}
          <div className="main-content ">
            {props.children}
          </div>
          {/* Main content end */}
  
        </div>
      </>
    );
  }
  
  export default Layout;
  