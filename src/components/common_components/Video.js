import React, { Component } from "react";
import video1 from '../common_components/image/MyVideo.mp4'
import './Video.css'
 
class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} height={500} width={230} className='video' />
      </div>
    );
  }
}

export default Video;