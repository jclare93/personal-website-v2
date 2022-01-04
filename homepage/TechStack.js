import React from "react"
import ReactLogo from "../images/ReactLogo.svg"
import NodeLogo from "../images/NodeLogo.svg"
import JavascriptLogo from "../images/JavascriptLogo.svg"
import Postgresql from "../images/Posgresql.svg"
import CSS3 from "../images/CSS3.svg"
import Typescript from "../images/Typescript.svg"

function TechStack({hoverOn, hoverOver, setHoverOn, setHoverOver}){
    return (
    <div className= "container border border-secondary bg-light rounded-3">
        <div className ="row">
            <div className ="d-flex justify-content-center pt-3">
                <h3>Technologies</h3>
            </div>
        </div>
        <div className= "row">
            <div className="container py-3">
                <div className = "card-deck">
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(3)}
                        style={{transform: `${hoverOn===3? 'scale(1.05,1.05)' : 'scale(1,1)'}`}} >
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={NodeLogo} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">NodeJS</h5>
                                <p className="card-text">For the backend I primarily use NodeJS. 
                                I have experience developing backend APIs with expressJS, Postgres, and Knex.
                                </p>
                            </div>
                        
                        </div>
                   
                
                
                    
                        
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(4)}
                        style={{transform: `${hoverOn===4? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={JavascriptLogo} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">JavaScript</h5>
                                <p className="card-text">I use JavaScript for the bulk of my web application 
                                development.
                                </p>
                            </div>
                        </div>
                        
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(5)}
                        style={{transform: `${hoverOn===5? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={ReactLogo} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">I am a React enthusiaist. I love to use it for my 
                                frontend development. 
                                </p>
                            </div>
                        </div>
                    
                </div>    
            </div>
        </div>
        <div className= "row">
            <div className="container py-3">
            <div className = "card-deck">
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(6)}
                        style={{transform: `${hoverOn===6? 'scale(1.05,1.05)' : 'scale(1,1)'}`}} >
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={Postgresql} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">PostgreSQL</h5>
                                <p className="card-text"> I am proficient in Postgres for database management.
                                </p>
                            </div>
                        
                        </div>
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(7)}
                        style={{transform: `${hoverOn===7? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={CSS3} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">CSS/HTML</h5>
                                <p className="card-text">I am familiar and comfortable with using CSS and HTML
                                in my web application development. 
                                </p>
                            </div>
                        </div>
                        <div className="card"
                        onMouseOut={() => setHoverOn(false)} onMouseOver={() => setHoverOn(8)}
                        style={{transform: `${hoverOn===8? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}>
                            <div className ="d-flex justify-content-center">
                                <img className="card-img-top" src={Typescript} style={{width: 100}} alt="NodeJS logo" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">TypeScript</h5>
                                <p className="card-text"> I am newer to TypeScript but I am trying to 
                                implement it in more of my projects.
                                </p>
                            </div>
                        </div>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default TechStack;