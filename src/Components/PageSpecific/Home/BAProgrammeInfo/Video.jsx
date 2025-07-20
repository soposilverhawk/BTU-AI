import React from "react";
import { useDesign } from "../../../../context/DesignProvider";

function Video({ src }) {
  return (
    <div style={{ position: "relative", width: "1000px", height: "400px" }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* video display overlay */}
      <div
        style={{
          backgroundColor: "#780B418A",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        }}
      ></div>
    </div>
  );
}

export default Video;
