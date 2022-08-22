import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// style
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/layout.sass";

// components
import Navbar from "./components/Navbar";

// pages
import Homepage from "./pages/homepage";
import QuickStart from "./pages/quickStart";
import Rules from "./pages/rules";
import About from "./pages/about";
import NotFound from "./pages/404";

const Main: React.FC = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/quick-start" element={<QuickStart />}/>
                    <Route path="/rules" element={<Rules />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Router>
        </>
    );
}

export default Main;
