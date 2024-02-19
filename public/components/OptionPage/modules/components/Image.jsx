import React, { useRef, useEffect, useState } from "react";
import Moveable from "moveable";

function Image({ image, index, scaleX, scaleY, handleDrag }) {
  const imageRef = useRef(null);
  const scalePositionMoveable = (data) => {
    console.log("⭐scalePositionMoveable");
    console.log(data);
    const adjustedX = data.x * scaleX;
    console.log("scaleX", scaleX);
    const adjustedY = data.y * scaleY;
    // Ensure coordinates are positive
    const finalX = Math.max(0, adjustedX);
    const finalY = Math.max(0, adjustedY);
    console.log("finalX", finalX);
    return [finalX, finalY];
  };
  useEffect(() => {
    const moveable = new Moveable(document.querySelector(".video-js"), {
      dragArea: false,
      draggable: true,
      container: document.querySelector(".video-js"),
      bounds: document.querySelector(".video-js").getBoundingClientRect(),
      resizable: true,
      scalable: true,
      rotatable: true,
      warpable: true,
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable: true, // ["resizable", "scalable", "rotatable"]
      origin: true,
      keepRatio: true,
      // Resize, Scale Events at edges.
      edge: false,
      throttleDrag: 0,
      throttleResize: 0,
      throttleScale: 0,
      throttleRotate: 0,
    });
    moveable.target = imageRef?.current;
    moveable.on("drag", (e) => {
      const targetRect = moveable.getRect();
      const parentRect = document
        .querySelector(".video-js")
        .getBoundingClientRect();
      const newX = e.clientX - parentRect.left - targetRect.width / 2;
      const newY = e.clientY - parentRect.top - targetRect.height / 2;
      const maxX = parentRect.width - targetRect.width;
      const maxY = parentRect.height - targetRect.height;
      const constrainedX = Math.min(Math.max(0, newX), maxX);
      const constrainedY = Math.min(Math.max(0, newY), maxY);
      console.log("constrainedX, constrainedY:", constrainedX, constrainedY);
      e.target.style.left = `${constrainedX}px`;
      e.target.style.top = `${constrainedY}px`;
      let [finalX, finalY] = scalePositionMoveable({
        x: constrainedX,
        y: constrainedY,
      });
      console.log("finalX, finalY:", finalX, finalY);
      handleDrag(image, finalX, finalY);
    });
    moveable.on("rotate", ({ target, transform }) => {
      console.log("Rotate event:", transform);
      target.style.transform = transform;
    });
    moveable.on(
      "resize",
      ({ target, width, height, dist, delta, clientX, clientY }) => {
        console.log("onResize", target);
        if (delta[0]) {
          target.style.width = `${width}px`;
        }
        if (delta[1]) {
          target.style.height = `${height}px`;
        }
      }
    );
  }, [imageRef]);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const scaleFactor = 0.5;
  //     const { width, height } = imageRef.current.getBoundingClientRect();
  //     const scaledWidth = width * scaleFactor;
  //     const scaledHeight = height * scaleFactor;
  //     imageRef.current.style.width = `${scaledWidth}px`;
  //     imageRef.current.style.height = `${scaledHeight}px`;
  //   };
  //   setTimeout(() => {
  //     handleResize();
  //   }, 500);
  // }, []);
  return (
    <img
      style={{
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
      }}
      src={image}
      alt=""
      className={`draggable-${index}`}
      ref={imageRef}
      id={`draggable${index}`}
    />
  );
}

export default Image;
