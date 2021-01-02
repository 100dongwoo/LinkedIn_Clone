import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from '../Sidebar/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';

function Feed(props) {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            });
    }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Baekdongwoo',
            description: 'this is a test',
            message: input,
            photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70b5f9"
                    />
                    <InputOption
                        Icon={SubscriptionsIcon}
                        title="Video"
                        color="#e7a33e"
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#c0cbcd"
                    />
                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title="Write article"
                        color="#7fc15e"
                    />
                </div>
            </div>
            {/*    posts*/}
            {posts.map(
                ({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )
            )}
        </div>
    );
}

export default Feed;
