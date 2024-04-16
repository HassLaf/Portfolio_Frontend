import React from "react";
import {createRoot} from "react-dom/client";
import SearchParams from "./LoginForm";

const App = () => {
    return(
        <div>
            <h1>My Projects</h1>
            <SearchParams />
        </div>
    );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
