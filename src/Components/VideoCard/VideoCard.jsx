import React, { useState } from 'react';
import "./VideoCard.scss"

const VideoCard = ({ items }) => {
    const [modal, setModal] = useState(false)
    const [videoIframe, setVideoIframe] = useState("")
    const handleHover = (id) => {
        setVideoIframe(`${id}`)
        setModal(true)

        console.log(videoIframe)
    }

    const handleNotHover = () => {
        setModal(false)
        setVideoIframe("")
    }
    console.log(items);
    return (
        <div onMouseLeave={handleNotHover} onMouseEnter={() => handleHover(items.videoId)} className={`video ${modal ? "open-modal" : "close-modal"}`}>
            <div className="video__thumbnail">
                {videoIframe == "" ?
                    <img src={items.thumbnails[2].url} alt="" />
                    :
                    <iframe
                        src={`https://www.youtube.com/embed/${videoIframe}?autoplay=1&mute=1`}>
                    </iframe>


                }
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
