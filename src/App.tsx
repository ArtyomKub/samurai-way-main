import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    )
}
const Technologies = () => {
    return (
        <div className="App">
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export default App;
