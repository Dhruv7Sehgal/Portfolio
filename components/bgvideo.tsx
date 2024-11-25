import React from "react";

const bgvideo = () => {
  return (
    <div>
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src="/video/gif.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default bgvideo;
