import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login/Login';

function App() {
    const user = useSelector(selectUser);

    return (
        <div className="app">
            {console.log(user)}
            {!user.user ? (
                <Login />
            ) : (
                <>
                    <Header />

                    <div className="app_body">
                        <Sidebar />
                        <Feed />
                        {/*<Widget />*/}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
