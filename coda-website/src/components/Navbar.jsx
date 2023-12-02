import React from 'react'
import "./Navbar.css"

/**
 * Simple Navbar
 * @author Tanish Bagadia
 * @returns navbar
 */
function Navbar() {
    return (
        <>
            <nav>
                <div class="nav-container">
                    <div class="nav-logo">
                        <img class="logo" src="./images/logo.png" alt="logo" /> Coda
                    </div>
                    <div class="nav-links">
                        <a href="/">Home</a>
                        <a href="https://github.com/SujalChoudhari/Coda/releases/latest">Download</a>
                        <a href="https://github.com/SujalChoudhari/Coda/wiki">Documentation</a>
                        <a href="https://github.com/SujalChoudhari/Coda/forks">Contribute</a>
                    </div>
                </div>
            </nav></>
    )
}

export default Navbar