import React, {useState} from "react";
import JohnCoffee from "../images/JohnCoffee.jpg"

function AboutMe({hoverOn, hoverOver, setHoverOn, setHoverOver}){
    
    return (
        <div className = "container border border-secondary bg-light rounded-3"
        onMouseOut={() => setHoverOver(false)} onMouseOver={() => setHoverOver(2)} 
        style={{transform: `${hoverOver===2? 'scale(1.02,1.02)' : 'scale(1,1)'}`}}>
            <div className = "row">
                <div className = "col-md-6">
                    <div className = "container">
                        <div className = "row">
                        <div className = "text-center">
                            <img className="img-fluid" src = {JohnCoffee} alt= "John Drinking Coffee"
                            onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(2)}
                            style={{transform: `${hoverOn===2? 'scale(1.02,1.02)' : 'scale(1,1)'}`}} 
                            height = "80%" width="80%"/>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className = "col-md-6 d-flex align-items-center">
                    <div className= "container">
                        <div className = "row">
                            <div className = "d-flex justify-content-center">
                                <h3>About Me</h3>
                            </div>
                        </div>
                        <div className = "row">
                        <div className = "col">
                            <p>In college I got my first coding experience, learning python for statistical analysis. 
                                Since then I have always been very interested 
                                in software development, and wanted to come back to develop those skills. 
                                After graduating college, I taught in South Korea as a Debate and English 
                                teacher for a couple of years. Throughout this time I have continued to work on
                                my coding and development skills.</p>
                            
                            <p> I am excited to interact and work together 
                                with others on any new or interesting projects  
                                If you ever need coding help or want to collaborate, please reach out.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;