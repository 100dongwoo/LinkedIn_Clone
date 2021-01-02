import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './sidebar.css';

function Sidebar(props) {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img
                    src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt=""
                />
                <Avatar className="sidebar_avatar" />
                <h2>Baek Dongwoo</h2>
                <h4>qorehddn123@naver.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar_statNumber">2,525</p>
                </div>
                <div className="sidebar_stat">
                    <p>View on Posts</p>
                    <p className="sidebar_statNumber">3,420</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react js')}
                {recentItem('java')}
                {recentItem('c#')}
                {recentItem('firbase')}
                {recentItem('aws')}
                {recentItem('c++')}
            </div>
        </div>
    );
}

export default Sidebar;
