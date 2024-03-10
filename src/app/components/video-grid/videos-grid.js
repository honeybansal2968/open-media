import React from 'react'
import VideoCard from '../videoCard'
import { videos } from "../../constants/videos-data"
import './videos-grid.css'
const VidoesGrid = () => {
  return (
    <div id='videos-grid'>
      {
        videos.map((video, index) => <VideoCard key={index} videoSrc={video} />)
      }
    </div>
  )
}

export default VidoesGrid