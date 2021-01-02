import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
    return (
        <div className="app">
            {/* Header<*/}
            <Header />
            {/* App Body */}
            <div className="app_body">
                <Sidebar />
                <Feed />
            </div>
            {/* Sidebar */}

            {/* feed */}

            {/* widgets*/}
        </div>
    );
}

export default App;
