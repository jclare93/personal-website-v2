import "./App.css";
import React from "react"
import Homepage from "./homepage/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path = "/" element={<Homepage />}/>
        </Routes>
    )
}

export default App;