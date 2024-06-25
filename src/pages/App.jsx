import  "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "../pages/Home";
import Apropo  from "../pages/Apropo";
import PageError from "./PageError";
import Housing from "../pages/Housing";
import "../Styles/App.css";



function App() {
    return (
        <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<PageError />} />	
					<Route path="/Apropo" element={<Apropo />} />					
					<Route path="/Housing" element={<Housing />} />
				</Routes>
			</BrowserRouter>
		</div>
    )
}

export default App