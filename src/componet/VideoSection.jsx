import React from "react";
import "../Style/videoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video src="/video/one.mp4"  autoPlay
  loop
  muted
  playsInline
  controls></video>
          <video src="/video/three.mp4"  autoPlay
  loop
  muted
  playsInline
  controls></video>
            <video src="/video/two.mp4"  autoPlay
  loop
  muted
  playsInline
  controls></video>
              <video src="/video/four.mp4"  autoPlay
  loop
  muted
  playsInline
  controls></video>
        
      </div>
    </section>
  );
};

export default VideoSection;
