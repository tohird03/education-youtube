import React from 'react';
import "./Header.scss"
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <i id="menu" className="material-icons">menu</i>
                <img
                    src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
                    alt=""
                />
            </div>

            <div className="header__search">
                <form action="">
                    <input type="text" placeholder="Search" />
                    <button><i className="material-icons">search</i></button>
                </form>
            </div>

            <div className="header__icons">
                <i className="material-icons display-this">search</i>
                <i className="material-icons">videocam</i>
                <i className="material-icons">apps</i>
                <i className="material-icons">notifications</i>
                <i className="material-icons display-this">account_circle</i>
            </div>
        </div>
    );
}

export default Header;
