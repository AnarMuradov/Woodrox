import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
    <div className={`active ${show && "hidden"}`}>
      <div id="navbar">
        <div className="navbarpos">
          <div className="navFixLogo">
            <img src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp" alt="" />
          </div>
           <div className="navFixItem">
           <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/About"}>ABOUT</Link></li>
                <li><Link>PAGES</Link></li>
                <li><Link>BLOG</Link></li>
                <li><Link to={"/Contact"}>CONTACT</Link></li>
            </ul>
           </div>
        </div>
      </div>
    </div>
        <div id="staticNavbar">
        <div className="navStaticSupport">
        <div className="navSupport">
            <div className="supportContent">
            <span className="visit">Visit Us</span>
            <span>Online Support</span>
            </div>
            <div className="supportIcons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-basketball"></i>
                <i class="fa-brands fa-behance"></i>
            </div>
        </div>
        </div>
        <div className="staticNav">

        <div className="navStaticLogo">
            <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png.webp" alt="" />
          </div>
           <div className="navStaticItem">
           <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/About"}>ABOUT</Link></li>
                <li className="posAbs"><Link>PAGES</Link>
                <ul className="dropdown">
                <li><Link to={"/Projects"}>PROJECTS</Link></li>
                <li><Link to={"/ProjectsDetails"}>PROJECTS DETAILS</Link></li>
                <li><Link>ELEMENTS</Link></li>
            </ul>
            </li>
                <li><Link>BLOG</Link></li>
                <li><Link to={"/Contact"}>CONTACT</Link></li>
            </ul>
           </div>
        </div>
        </div>
 
    </>
  );
};

export default Navbar;
