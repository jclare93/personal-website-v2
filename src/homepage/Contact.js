import React, {useState} from "react"
import "./Contact.css"

function ContactMe({hoverOn, hoverOver, setHoverOn, setHoverOver}){
    const [contactShow, setContactShow] = useState(false)
    const handleContactClick = (e) =>{
        e.preventDefault()
        setContactShow(true)
    }
    return (
        <div className="container" style={{height:"50vh"}}
        >
            <div className = "row"> 
                <div className="col-10">
                    <div className= "container">
                        <div className = "row pt-5 pb-2 px-5">  
                            <h3 className="display-1 fw-bold text-nowrap d-flex justify-content-start chat"
                            onMouseOut={() => setHoverOn(false)}
                            onMouseOver={() => setHoverOn(9)}
                            style={{transform: `${hoverOn===9? 'scale(1.2,1.2)' : 'scale(1,1)'}`}}
                            type = "button" onClick={handleContactClick}>Let's Chat!</h3>
                        </div>           
                        <div className="row">
                            <div className="col">
                                <div className= "container d-flex justify-content-center">
                                <div className="row">
                                <div className="col">
                                
                                <h5 className="contact"
                                 type = "button" onClick={handleContactClick}><b>Contact Me @</b></h5>
                                
                                </div>
                                <br></br>
                                 {contactShow &&
                                    <div className="row">
                                        
                                            <a className= "anchor-class" href="https://github.com/jclare93"><b>GitHub</b></a>
                                            <a className="anchor-class" href="https://www.linkedin.com/in/johnclare957/">
                                                <b>LinkedIn</b>
                                            </a>
                                            <a className="anchor-class"href="mailto:johnclare957@gmail.com"><b>Email Me</b></a>
                                    </div>}
                                </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ContactMe