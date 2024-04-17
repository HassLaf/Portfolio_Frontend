import React from "react";
import {createRoot} from "react-dom/client";
import {Link,BrowserRouter, Routes, Route} from "react-router-dom";
import SearchParams from "./LoginForm";
import Home from "./HomePage";

const App = () => {
    return(
        <BrowserRouter>
            <header>
                <Link to="/">My Projects</Link>
            </header>
            <h1 className="text-3xl font-bold underline">My Projects</h1>
            <Routes>
                <Route path="/Home/:projectID" element={<Home />} />  
                <Route path="/" element={<SearchParams />} /> 
            </Routes>
            
        </BrowserRouter>     
    );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
