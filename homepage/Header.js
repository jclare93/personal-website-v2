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
                        <a class="nav-link" href="#">Projects</a>
                        <Link activeClass="active" to="TechStack" spy={true} smooth={true} offset={-70}
                        duration={500} className="nav-link" type="button">Tech Stack</Link>
                    </div>
                    </div>
                </div>
            </nav>
        
    )
}
export default Header;