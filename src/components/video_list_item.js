import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video *or* {video} is the same, it says "give me the video from props"
  const imageUrl = video.snippet.thumbnails.default.url
// when a user clicks on the LI below, it's an event where user is selected the video to be able to play it next
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
