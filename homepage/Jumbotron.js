import React, {useState} from "react"

//const snippet = d-flex align-items-center flex-column

function Jumbotron({hoverOn, hoverOver, setHoverOn, setHoverOver}) {
    const [mouseOver, setMouseOver] = useState({
        scale: 1,
        shadow: 0,
    })
    
    const handleMouseEnter = () => {
        setMouseOver({
            scale: 1.1,
            shadow: 1,
        })
    }
    
    const handleMouseLeave = () => {
        setMouseOver({
            scale: 1,
            shadow: 0,
        })
    }

    /*transform code snippet 
    style = {transform: `scale(${mouseOver})`}
    onMouseOver={() => handleMouseEnter} onMouseOut={() => handleMouseLeave}
    */

    /* og code snippet
    <div className="col-md-6">
                    <div className= "container">
                        <div className = "row">  
                            <h1 className="display-3 fw-bold text-nowrap d-flex justify-content-center">John Clare</h1>
                        </div>           
                        <div className="row ">
                            <div className="col text-nowrap">
                                <h2 className="d-flex justify-content-center">Full Stack Developer</h2>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className ="col-md-6">
                    <div className="container"> 
                        <div className="d-flex justify-content-center">    
                            <h2 className= "display-1 text-muted"
                            onMouseOut={() => setHoverOn(false)}
                            onMouseOver={() => setHoverOn(1)}
                            style={{size:500,transform: `${hoverOn===1? 'scale(2,2)' : 'scale(1,1)'}`}}>//</h2>   
                        </div>  
                    </div>
                </div>
                */
    return (
        <div className="container border border-secondary rounded-circle bg-light d-flex align-content-center 
        flex-wrap justify-content-center" 
        onMouseOut={() => setHoverOver(false)} onMouseOver={() => setHoverOver(1)} 
        style={{height:"80vh", transform: `${hoverOver===1? 'scale(1.02,1.02)' : 'scale(1,1)'}`}}>
        <div className = "row">  
            <div className="col">
                <div className= "row ">
                    <div className = "col">
                    <div className = "container">
                        <div className = "row d-flex">
                            <h1 className="display-3 fw-bold text-nowrap ">John Clare</h1>
                        </div>           
                        <div className="row">
                            <div className="col text-nowrap">
                                <h2>Full Stack Developer</h2>
                            </div>
                        </div>  
                    </div>
                    </div>
                </div>
                <br/>
                <div className ="row">
                    <div className="col">
                    <div className="container d-flex justify-content-center"> 
                        <div className="d-flex justify-content-center">    
                            <h2 className= "display-1 text-muted"
                            onMouseOut={() => setHoverOn(false)}
                            onMouseOver={() => setHoverOn(1)}
                            style={{size:500,transform: `${hoverOn===1? 'scale(2,2)' : 'scale(1,1)'}`}}>//</h2>   
                        </div>  
                    </div>
                    </div>
                </div>
            </div>
        </div>   
        </div>  
        
    )
}

export default Jumbotron;