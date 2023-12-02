/**
 * Packages Section
 * @author Sujal Choudhari
 */

import React, { useState, useEffect } from 'react';
import './Packages.css';

function Packages() {
    const [username, setUsername] = useState('');
    const [repoName, setRepoName] = useState('');
    const [packagesList, setPackagesList] = useState([]);
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value.trim());
    };

    const handleRepoNameChange = (event) => {
        setRepoName(event.target.value.trim());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // add new item
            const response = await fetch('http://localhost:3001/addPackage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, repoName }),
            });

            if (!response.ok) {
                throw new Error('Failed to add package');
            }

            // update list
            const updatedList = await fetch('http://localhost:3001/getPackages');
            const data = await updatedList.json();
            setPackagesList(data);
        } catch (error) {
            console.error('Error adding package:', error);
            setError('Failed to add package. Please try again.');
        }
    };

    // fetch on load
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await fetch('http://localhost:3001/getPackages');
                const data = await response.json();
                setPackagesList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data. Please try again.');
            }
        };

        fetchPackages();
    }, []);

    return (
        <>
            <section className="packages">
                <div className="packages-title">
                    <h3>Packages</h3>
                </div>
                <div className="packages-content">
                    <form onSubmit={handleSubmit} className="form">
                        <label>
                            GitHub Username:
                            <input
                                type="text"
                                className='inputs'
                                value={username}
                                title='Enter Github UserName of the author of the package'
                                placeholder='tms04'
                                onChange={handleUsernameChange} />
                        </label>
                        <label>
                            Repository Name:
                            <input
                                type="text"
                                className='inputs'
                                value={repoName}
                                title="Enter the repository name to use it as a package (Use exact string)"
                                placeholder='dsa'
                                onChange={handleRepoNameChange} />
                        </label>
                        <button type="submit" className="button add-button">
                            Add Package
                        </button>
                    </form>

                    {error && <p className="error-message">{error}</p>}

                    <div className="packages-list">
                        <h4>Package List</h4>
                        <ul>
                            {packagesList.map((packageItem) => (
                                <li className='package-entry' key={packageItem.id}>
                                    <div>
                                        <span className='name-block'>{packageItem.repoName} </span>
                                        <span className='by-block'> Made By <a href="https://github.com/${packageItem.username}">{packageItem.username} </a></span>
                                    </div>
                                    <div>
                                        <a className='button get-button'
                                            href={`https://github.com/${packageItem.username}/${packageItem.repoName}/`}> VIEW</a>

                                        <a className='button get-button'
                                            href={`https://github.com/${packageItem.username}/${packageItem.repoName}/releases/latest`}> GET</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Packages;
