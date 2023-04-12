import React, { useState, useEffect, useContext } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ContextTheme } from '../../Context/ThemeContext';

import "./Header.scss"
const Header = () => {
    const [modal, setModal] = useState(false)
    const { theme, setTheme, user } = useContext(ContextTheme)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (e.keyCode == 13) {
            window.location.href = `/search/${e.target.value}`
        }
    }
    const handeOpenModal = (e) => {
        setModal(!modal)
    }



    if (!listening && transcript.length > 1) {
        if (transcript == "home" || transcript == "Home") {
            window.location.href = `/`
        } else {
            window.location.href = `/search/${transcript}`
        }
    }

    const handleChangeTheme = (e) => {
        if (e.target.value == "dark") {
            setTheme(true)
        } else if (e.target.value == "light") {
            setTheme(false)
        } else if (e.target.value == "") {
            setTheme(theme)
        }
    }

    return (
        <div className={theme ? "header dark" : "header light"}>
            <div className="header__left">
                <i id="menu" className="material-icons">menu</i>
                <img
                    src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
                    alt=""
                />
            </div>

            <div className="header__search">
                <div className='header__search-wrapper'>
                    <input onKeyUp={handleSearch} type="text" placeholder="Search" />
                    <button onClick={handeOpenModal} className='submit'><i className="material-icons">search</i></button>
                </div>

                <div className={modal ? "modal-open modal" : "modal-close modal"}>
                    <button className='header__modal-closeBtn' onClick={handeOpenModal} >Close</button>
                    <div>
                        <p>Microphone: {listening ? 'on' : 'off'}</p>
                        <button onClick={SpeechRecognition.startListening}>Start</button>
                        <button onClick={SpeechRecognition.stopListening}>Stop</button>
                        <button onClick={resetTranscript}>Reset</button>
                        <p>{transcript}</p>
                    </div>
                </div>
            </div>

            <div className="header__icons">
                <select onChange={handleChangeTheme}>
                    <option disabled value="">Change Theme</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
                <i className="material-icons display-this">search</i>
                <i className="material-icons">videocam</i>
                <i className="material-icons">apps</i>
                <i className="material-icons">notifications</i>

                {
                    user ? <img  className='acc_img' src={user.photoURL} width="40" height="40" alt="" /> : <i className="material-icons display-this">account_circle</i>
                }


            </div>
        </div>
    );
}

export default Header;
