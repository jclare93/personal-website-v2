import React from 'react'

function Projects(){
    return(
    <div className="container border border-secondary bg-light rounded-3">
        <h3 className ="d-flex justify-content-center py-3">Projects</h3>
        <ul class="list-unstyled">
            <li class="media">
                <img src="..." class="mr-3" alt="..." />
                <div class="media-body">
                <h5 class="mt-0 mb-1"><strong>Restaurant Reservation App</strong></h5>
                <p> This application can be used by business administrators to manage their restaurant's 
                    reservations, tables, and customers. It can also be used by customers to make reservation,
                    choose their tables, and edit their details.
                </p>
                <a href="https://github.com/jclare93/starter-restaurant-reservation"><b>GitHub Link</b></a> 
                ||
                <a href="https://restaurant-rez-client.herokuapp.com/"><b> Live Demo</b></a>
                <p></p>
                <p><b>Technology used:</b> React, JavaScript, NodeJS, Postgres, Git, Express, and deployed with Heroku.</p>
                </div>
            </li>
            <li class="media my-4">
                <img src="..." class="mr-3" alt="..." />
                <div class="media-body">
                <h5 class="mt-0 mb-1">Flashcards App</h5>
                <p>This is a web based React application. This is an application developed using mostly 
                ReactJS and Javascript. This project demonstrates
                how to build custom hooks and proficiently manage state in react web applications.
                </p>
                <p></p>
                <a href="https://github.com/jclare93/Project_Flashcards"><b>Github Link</b></a>
                <p></p>
                <p><b>Technology Used:</b>Uses Javascript, HTML, CSS, and React; designed with Bootstrap with React.</p>
                </div>
            </li>
            <li class="media">
                <img src="..." class="mr-3" alt="..." />
                <div class="media-body">
                <h5 class="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </li>
        </ul>
    </div>
    )
}
export default Projects