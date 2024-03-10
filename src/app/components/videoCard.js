import React from 'react'

const VideoCard = ({ videoSrc }) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            backgroundColor: "white",
            padding: "10px",
        }}>  <video autoPlay muted loop width="100%" height="100%" id="bgVideo" style={{ objectFit: "cover" }} >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video></div>
    )
}

export default VideoCard