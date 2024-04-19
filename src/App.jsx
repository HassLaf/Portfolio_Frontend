import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import SearchParams from "./LoginForm";
import Home from "./hooks/DetailProjet";
import Navbar from "./Navbar";
import Login from "./Login";
import { AuthContextProvider } from "./context/AuthContext";




const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,

        },
    },

});


const App = () => {
    return(
        <AuthContextProvider>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header className="bg-white">
                    <Navbar />
                </header>
                
                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/Project/:projectID" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </QueryClientProvider>   
        </BrowserRouter>
        </AuthContextProvider> 
    );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

