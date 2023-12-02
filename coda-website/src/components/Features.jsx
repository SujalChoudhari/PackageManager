/**
 * Features of Coda
 * @author Tanay Shah
 */

import React from 'react'
import "./Features.css"
function Feature() {
    return (
        <>
            <section class="feature">
                <div class="feature-title">
                    <h3>Featurs of Coda</h3>
                </div>
                <div class="feature-content">
                    <div class="feature-row">
                        <div class="feature-card">
                            <h3>Blazing</h3>
                            <p>
                                Coda is 8 times faster than CPython.<br />
                                Coda is 3 times faster than Node.js
                            </p>
                        </div>
                        <div class="feature-card">
                            <h3>Dynamic Object Oriented</h3>
                            <p>
                                Every datatype is an object, where object being the super data structure.
                            </p>
                        </div>
                    </div>
                    <div class="feature-row">
                        <div class="feature-card">
                            <h3>Modular</h3>
                            <p>
                                Easy to create Packages with the FFI interfaces. Fast Modules with C++ Code.
                            </p>
                        </div>
                        <div class="feature-card">
                            <h3>Build Systems</h3>
                            <p>
                                With .coda files create build systems to do multiple tasks at once skipping the Make or CMake Tools
                            </p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Feature