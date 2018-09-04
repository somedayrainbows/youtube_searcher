import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        // callback function that was passed from App, passing it on down to video list item
        key={video.etag}
        video={video} />
    ) // passes in the video as a property
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
