import React, { useRef, useEffect, useState } from "react";

import Moveable, { DIRECTIONS } from "react-moveable";

function Image({ image, index, setImages }) {
  const imageRef = useRef(null);

  // const handleRotate = (e) => {
  //   const { width, height } = e.target.getBoundingClientRect();
  //   console.log(e.target, "handle Rotate");
  //   setImages(
  //     {
  //       width: parseInt(width),
  //       height: parseInt(height),
  //       rotationAngle: getCurrentRotation(e.target.id),
  //       image: image,
  //     },
  //     index
  //   );
  // };
  return (
    <>
        <img
          style={{
            width: "320px",
            height: "240px",
          }}
          src={image}
          alt=""
          ref={imageRef}
          id={`image${index}`}
        />
      <MoveableImage imageRef={imageRef} />

    </>
  );
}

export default Image;


// Moveable image take image ref as target and calculate resiable
function MoveableImage({ imageRef }) {
  const handleRotate = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    console.log(e.target, "handle Rotate");
    setImages(
      {
        width: parseInt(width),
        height: parseInt(height),
        rotationAngle: getCurrentRotation(e.target.id),
      },
      index
    );
  };
  return (
    <Moveable
      target={imageRef}
      // draggable={true}
      rotatable={{
        renderDirections: DIRECTIONS,
      }}
      resolveAblesWithRotatable={{
        resizable: ["nw", "ne", "sw", "se"],
      }}
      lockVertically={false}
      resizable={{
        renderDirections: false,
      }}
      rotateAroundControls={true}
      onDrag={(e) => {
        console.log(e.target.dataset, "Dragging");
        // e.target.style.cssText += `transform: ${e.transform};`;
      }}
      onDragEnd={(e) => {
        console.log(e, "on Drag End");
      }}
      onResize={(e) => {
        console.log(e.target, "resize");
      }}
      onRotateStart={(e) => {
        // e.setFixedDirection([0, 0]);
      }}
      onRotate={(e) => {
        // e.target.style.cssText = e.cssText;
        e.target.style.cssText += e.cssText;
      }}
      onRotateEnd={(e) => handleRotate(e)}
    />
  );
}

// Function to find rotation angle of image in degree. it take id of target element as parameter
function getCurrentRotation(elid) {
  var el = document.getElementById(elid);
  var st = window.getComputedStyle(el, null);
  var tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "fail...";

  if (tr !== "none") {
    console.log("Matrix: " + tr);

    var values = tr.split("(")[1];
    values = values.split(")")[0];
    values = values.split(",");
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a * a + b * b);

    // First option, don't check for negative result
    // Second, check for the negative result
    /**/
    var radians = Math.atan2(b, a);
    var angle = Math.round(radians * (180 / Math.PI));
    /*/
    var radians = Math.atan2(b, a);
    if ( radians < 0 ) {
      radians += (2 * Math.PI);
    }
    var angle = Math.round( radians * (180/Math.PI));
    /**/
  } else {
    var angle = 0;
  }

  // works!
  return angle;
}
