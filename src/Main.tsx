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

const Main: React.FC = () => {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />}/>
                    <Route path="/quick-start" element={<QuickStart />}/>
                </Routes>
            </Router>
        </>
    );
}

export default Main;
