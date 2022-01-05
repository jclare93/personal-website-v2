import React from "react"
import TechStack from "./TechStack";
import { Link, animateScroll as scroll } from "react-scroll";

function Header(){
    return(
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">John Clare</span> 
                    <div class="collapse navbar-collapse" id="homepageNavBar">
                    <div class="navbar-nav">
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">Home</Link>
                        <Link activeClass="active" to="AboutMe" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">About</Link>
                        <Link activeClass="active" to="TechStack" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">Tech Stack</Link>
                        <Link activeClass="active" to="Projects" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">Projects</Link>
                        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">Contact</Link>
                    </div>
                    </div>
                </div>
            </nav>
        
    )
}
export default Header;