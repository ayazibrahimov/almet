
import React from 'react'
import ReactPlayer from 'react-player'
// import a from '../../../video/almet.mp4'


const VideoPlayer = () => {

    let videosrc = '../../../video/almet.mp4'


  return (
    <div>

      <ReactPlayer 
        width='500px'
        height='500px'
        controls={true}  
        light={false}
        pip={true}
       > 
        <source src={videosrc} type='vide/mp4' />
      </ReactPlayer>
    </div>
  )
}

export default VideoPlayer;













