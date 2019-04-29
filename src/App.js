import React from 'react';
import './App.css';

const App = () => {
    const text = 'src/App.js';
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit
                    &nbsp;
                    <code>{text}</code>
                    &nbsp;
                    and save to reload
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </p>
            </header>
        </div>
    );
};

export default App;
