import React from "react";
import VitrineComp from "./components/VitrineComp";
import NavBarComp from "./components/NavbarComp";
import "./styles/Styles.css"

function App() {
    return (
        <div className="app-container">
            <NavBarComp />
            <VitrineComp />
        </div>
    );
}

export default App;
