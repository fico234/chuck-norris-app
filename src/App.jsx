import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './index.css';
import FirstPage from "./FirstPage"
import SecondPage from './SecondPage';
import LastPage from './LastPage';
import ErrorPage from "./ErrorPage";

function App() {
    return(
        <Router>
            <nav className="bg-cyan-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded text-sky-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto text-2xl font-bold">
                    <Link to="/" >Početna</Link>
                    <Link to="/kategorije" >Kategorije</Link>
                    <Link to="/pretraga" >Pretraga</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/kategorije" element={<SecondPage />} />
                <Route path="/pretraga" element={<LastPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default App