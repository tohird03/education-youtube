import React from 'react';
import "./VideoCard.scss"

const VideoCard = ({items}) => {
    return (
        <div className="video">
            <div className="video__thumbnail">
                <img src={items.thumbnails[2].url} alt="" />
            </div>
            <div className="video__details">
                <div className="author">
                    <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                </div>
                <div className="title">
                    <h3>
                        {items.title}
                    </h3>
                    <a href="">
                        {items.channelName}
                    </a>
                    <span>{items.viewCountText} • {items.publishedTimeText}</span>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
