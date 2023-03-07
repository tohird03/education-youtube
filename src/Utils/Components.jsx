import React from 'react';

const LinkSidebar = ({ linkIcon, text, link }) => {
    return (
        <div className="sidebar__category">
            <i className="material-icons">
                {linkIcon}
            </i>
            <span>{text}</span>
        </div>
    );
}

export {LinkSidebar};
