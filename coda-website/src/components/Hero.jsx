/**
 * Hero Section
 * @author Tanay Shah
 */

import React from 'react'
import "./Hero.css"
function Hero() {
    return (
        <>
            <section class="hero">
                <div class="hero-title-holder">
                    <h2 class="hero-title">
                        The Coda Programming Language
                    </h2>
                </div>
                <div class="hero-button-holder">
                    <a href="https://github.com/SujalChoudhari/Coda/releases/latest">
                        <button class="button hero-download">Download</button>
                    </a>
                    <a href="https://github.com/SujalChoudhari/Coda/wiki">
                        <button class="button hero-wiki">Wiki</button>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero