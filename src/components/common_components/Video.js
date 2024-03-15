import React, { Component } from "react";
import video1 from '../common_components/image/MyVideo.mp4'
import './Video.css'
 
class Video extends Component {
  render() {
    return (
      <div className="text-center">
        <video src={video1}    className='video' />
      </div>
    );
  }
}

export default Video;