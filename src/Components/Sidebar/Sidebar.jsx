import React, {useContext, useState} from 'react';
import { ContextTheme } from '../../Context/ThemeContext';
import {LinkSidebar} from '../../Utils/Components';
import "./Sidebar.scss"
const Sidebar = () => {
    const { theme, user } = useContext(ContextTheme)
    return (
        <div className={theme ? "sidebar dark" : "sidebar light"}>
            <div className="sidebar__categories">
                 { user ? <LinkSidebar linkIcon="account_circle" text={user.displayName} link="user-about"/> : "" }
                <LinkSidebar linkIcon="home" text="Home" link=""/>
                <LinkSidebar linkIcon="local_fire_department" text="Trending" link="trending"/>

                <LinkSidebar linkIcon="subscriptions" text="Subcriptions" link="subscriptions"/>
            </div>
            <hr />
            <div className="sidebar__categories">

                <LinkSidebar linkIcon="history" text="History" link="history"/>

                <LinkSidebar linkIcon="play_arrow" text="Your Videos" link="your-videos" />

                <LinkSidebar linkIcon="watch_later" text="Watch Later" link="watch-later" />

                <LinkSidebar linkIcon="thumb_up" text="Liked Videos" link="like" />

            </div>
            <hr />
        </div>
    );
}

export default Sidebar;
