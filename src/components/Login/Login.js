import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        );
                    });
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="login">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDvtA8tDCX5mHYU_SYNDCPF7tUaeG7aZfnQ&usqp=CAU"
                alt=""
            />
            <form>
                <input
                    value={name}
                    placeholder="Full name"
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <input
                    placeholder="Profile pic Url(Option)"
                    type="text"
                    value={profilePic}
                    onChange={(e) => {
                        setProfilePic(e.target.value);
                    }}
                />
                <input
                    value={email}
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    value={password}
                    placeholder="password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?
                <span className="login_register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;
