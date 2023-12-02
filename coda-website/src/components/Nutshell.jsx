/**
 * Coda in a Nutshell
 * @author Tanay Shah
 */

import React from 'react'
import "./Nutshell.css"

function Nutshell() {
    return (
        <>
            <section class="nutshell">
                <div class="nutshell-title">
                    <h3>Coda in a Nutshell</h3>
                </div>
                <div class="nutshell-content">
                    <div class="nutshell-row">
                        <div class="nutshell-card">
                            <h3>Fast</h3>
                            <p>
                                Coda was designed from the beginning for better performance. Coda programs are light weight
                                for any processor.
                                Most of the Coda packages are written in C++.
                            </p>
                        </div>
                        <div class="nutshell-card">
                            <h3>Dynamic</h3>
                            <p>
                                Coda is dynamically typed, feels like a scripting language, and has good support for interactive use.
                            </p>
                        </div>
                    </div>
                    <div class="nutshell-row">
                        <div class="nutshell-card">
                            <h3>Open source</h3>
                            <p>
                                Coda is an open source project with over 1 contributor. It is made available under the MIT license. The source code is available on GitHub.
                            </p>
                        </div>
                        <div class="nutshell-card">
                            <h3>Reproducible</h3>
                            <p>
                                Reproducible environments make it possible to recreate the same Coda environment every time, across platforms, with pre-built binaries.
                            </p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Nutshell