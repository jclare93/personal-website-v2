import React from 'react'
import restaurantres from "../images/restaurantres.svg"
import indexcard from "../images/indexcard.svg"
import timerround from "../images/timerround.svg"

function Projects(){
    return(
    <div className="container border border-secondary bg-light rounded-3">
        <h3 className ="d-flex justify-content-center py-3">Projects</h3>
        <ul class="list-unstyled">
            <li class="media">
                <img src={restaurantres} style= {{height: 64}}className="mr-3" alt="Knife, fork, and plate logo" />
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
                <img src={indexcard} style={{height:64}} class="mr-3" alt="file folders" />
                <div class="media-body">
                <h5 class="mt-0 mb-1"><strong>Flashcards App</strong></h5>
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
                <img src={timerround} style = {{height:64}} class="mr-3" alt="round timer logo" />
                <div class="media-body">
                <h5 class="mt-0 mb-1"><strong>Pomodoro Timer</strong></h5>
                <p>This is a React application with an intuitive interface and effective management of state
                    that allows the app to continue operating seemlessly and continuously.
                    It is a timer based on the “Pomodoro Method” to help improve time management skills for work or studying.
                </p>
                <a href="https://github.com/jclare93/Pomodoro-Timer"><b>GitHub Link</b></a> 
                ||
                <a href="https://project-pomodoro-timer-qualified-1-coral-pi.vercel.app/"><b> Live Demo</b></a>
                <p></p>
                <p><b>Technology used:</b> JavaScript, HTML, CSS, and React, and deployed on Vercel.</p>
                
                </div>
            </li>
        </ul>
    </div>
    )
}
export default Projects