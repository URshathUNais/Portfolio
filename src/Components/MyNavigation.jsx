import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { media } from "../Util/Service";

function MyNavigation() {

  const navItemRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    client: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const [navItemLeft, setNavItemLeft] = useState(0);
  const [navItemWidth, setNavItemWidth] = useState(0);
  const [navItemTop, setNavItemTop] = useState(0);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const getCurrentRef = () => {
    switch (path) {
      case "/":
        return navItemRefs.home;
      case "/about":
        return navItemRefs.about;
      case "/projects":
        return navItemRefs.projects;
      case "/client":
        return navItemRefs.client;
      case "/skills":
        return navItemRefs.skills;
      case "/contact":
        return navItemRefs.contact;
      default:
        return navItemRefs.home;
    }
  };

  useEffect(() => {
    const { current } = getCurrentRef();
    if (current) {
      const { left, width, top } = current.getBoundingClientRect();
      setNavItemLeft(left);
      setNavItemWidth(width);
      setNavItemTop(top);
    }
  }, [path]);

  const handleHover = (refName) => {
    const { left, width, top } = navItemRefs[refName].current.getBoundingClientRect();
    setNavItemLeft(left);
    setNavItemWidth(width);
    setNavItemTop(top);
  };

  const handleMouseLeave = () => {
    const { current } = getCurrentRef();
    const { left, width, top } = current.getBoundingClientRect();
    setNavItemLeft(left);
    setNavItemWidth(width);
    setNavItemTop(top);
  };

  return (
    <MyNavigationStyle navItemLeft={navItemLeft} navItemWidth={navItemWidth} navItemTop={navItemTop}>
      <div className="d-flex text-light gap-xl-4 gap-lg-3 gap-sm-2 mt-5 ms-5">
        <div className="hoverActive"></div>
        <Link
          to="/"
          className={`nav-item ${path === "/" ? "active" : ""}`}
          ref={navItemRefs.home}
          onMouseEnter={() => handleHover("home")}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-item ${path === "/about" ? "active" : ""}`}
          ref={navItemRefs.about}
          onMouseEnter={() => handleHover("about")}
          onMouseLeave={handleMouseLeave}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`nav-item ${path === "/projects" ? "active" : ""}`}
          ref={navItemRefs.projects}
          onMouseEnter={() => handleHover("projects")}
          onMouseLeave={handleMouseLeave}
        >
          Projects
        </Link>
        <Link
          to="/client"
          className={`nav-item ${path === "/client" ? "active" : ""}`}
          ref={navItemRefs.client}
          onMouseEnter={() => handleHover("client")}
          onMouseLeave={handleMouseLeave}
        >
          Client
        </Link>
        <Link
          to="/skills"
          className={`nav-item ${path === "/skills" ? "active" : ""}`}
          ref={navItemRefs.skills}
          onMouseEnter={() => handleHover("skills")}
          onMouseLeave={handleMouseLeave}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className={`nav-item ${path === "/contact" ? "active" : ""}`}
          ref={navItemRefs.contact}
          onMouseEnter={() => handleHover("contact")}
          onMouseLeave={handleMouseLeave}
        >
          Contact
        </Link>
      </div>
    </MyNavigationStyle>
  );
}

const MyNavigationStyle = styled.div`
  .nav-item {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    padding-bottom: 10px;
    color: white;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }

  .active::after {
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    background-color: red;
    margin-top: 8px;
    border-radius: 5px;
  }

  .hoverActive {
    position: absolute;
    height: 5px;
    width: ${(props) => props.navItemWidth + "px"};
    border: 1px solid red;
    left: ${(props) => props.navItemLeft + "px"};
    border-radius: 5px;
    top: ${(props) => props.navItemTop + 32 + "px"};
    transition: left 0.5s;
  }

  @media ${media.md} {
    .nav-item {
      font-size: 12px;

      &:hover {
        opacity: 0.7;
      }
    }

    .hoverActive {
      top: ${(props) => props.navItemTop + 26 + "px"};
    }
  }

  @media (max-width: 576px) {
    .d-flex {
      gap: 8px; 
    }

    .nav-item {
      font-size: 12px; 
    }
  }
`;

export default MyNavigation;
