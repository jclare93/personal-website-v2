import React, { useState } from "react"
import Header from "./Header"
import AboutMe from "./AboutMe"
import Jumbotron from "./Jumbotron"
import TechStack from "./TechStack"
import {Route, Routes} from "react-router-dom"
import "./Homepage.css"
import Projects from "./Projects"
import Contact from "./Contact"

function Homepage(){
    const [hoverOn, setHoverOn] = useState(false)
    const [hoverOver, setHoverOver] = useState(false)

    return (
<div className= "bg-color">
    <div className = "container d-grid gap-3">
        
            
                <div className = "row">
                    <div className="col">
                        <Header />
                    </div>
                </div>
            
                <div className="row fill-window-jumbo d-flex justify-content-center" id="Home">
                    <div className="col-6">
                        <Jumbotron hoverOn={hoverOn} hoverOver={hoverOver} setHoverOn={setHoverOn}
                        setHoverOver={setHoverOver}/>
                    </div>
                </div>

                
            
                <div className = "row fill-window" id = "AboutMe" >
                    <div className= "col">
                        <AboutMe hoverOn={hoverOn} hoverOver={hoverOver} setHoverOn={setHoverOn}
                        setHoverOver={setHoverOver}/>
                    </div>
                </div>
            
                <div className = "row fill-window" id="TechStack">
                    <div className = "col">
                        <TechStack hoverOn={hoverOn} hoverOver={hoverOver} setHoverOn={setHoverOn}
                        setHoverOver={setHoverOver}/>
                    </div>
                </div>

                <div className = "row fill-window" id="Projects">
                    <div className = "col">
                        <Projects hoverOn={hoverOn} hoverOver={hoverOver} setHoverOn={setHoverOn}
                        setHoverOver={setHoverOver}/>
                    </div>
                </div>
                <div className = "row fill-window-jumbo d-flex justify-content-center pt-5" id="Contact">
                    <div className = "col">
                        <Contact hoverOn={hoverOn} hoverOver={hoverOver} setHoverOn={setHoverOn}
                        setHoverOver={setHoverOver}/>
                    </div>
                </div>
            
    </div>
</div>
    )
}

export default Homepage;