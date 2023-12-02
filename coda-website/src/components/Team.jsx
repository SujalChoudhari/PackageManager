/**
 * Team Members
 * @author Tanish Bagadia
 */

import React from 'react'
import "./Team.css"

function Team() {
    return (
        <>
            <section class="team">
                <div class="team-title">
                    <h3>Team</h3>
                </div>
                <div class="team-content">
                    <div class="team-row">
                        <div class="team-card">
                            <h3>Sujal Choudhari</h3>
                            <p>
                                Lead Developer
                            </p>
                        </div>
                    </div>
                    <div class="team-row">
                        <div class="team-card">
                            <h3>Tanay Shah</h3>
                            <p>
                                Frontend Developer
                            </p>
                        </div>
                        <div class="team-card">
                            <h3>Tanish Bagadia</h3>
                            <p>
                                Backend Developer
                            </p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Team