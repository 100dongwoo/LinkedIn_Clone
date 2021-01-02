import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className="app">
            {/* Header<*/}
            <Header />
            {/* App Body */}
            <div className="app_body">
                <Sidebar />
            </div>
            {/* Sidebar */}

            {/* feed */}

            {/* widgets*/}
        </div>
    );
}

export default App;
