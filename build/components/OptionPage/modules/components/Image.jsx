import React, { useRef, useEffect, useState } from "react";
import Moveable from "moveable";

function Image({ image, index, scaleX, scaleY, handleMovement, handleResize }) {
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
  function applyRotation(e) {
    const rotationMatch = e.transform.match(/rotate\((-?\d+(\.\d+)?)deg\)/);
    if (rotationMatch) {
      const rotationValue = parseFloat(rotationMatch[1]).toFixed(3);
      e.target.style.transform = `rotate(${rotationValue}deg)`;
    }
  }
  function rotationExtractAndRound(translate) {
    const match = translate.match(/rotate\((.*?)deg\)/);
    if (match && match[1]) {
      const number = parseFloat(match[1]);
      return number.toFixed(3);
    }
    return null; // or any default value you prefer
  }
  useEffect(() => {
    function handleNewUserInteraction(e, interaction) {
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
      if (interaction == "move") {
        e.target.style.left = `${constrainedX}px`;
        e.target.style.top = `${constrainedY}px`;
      }
      let [finalX, finalY] = scalePositionMoveable({
        x: constrainedX,
        y: constrainedY,
      });
      let rotation = rotationExtractAndRound(e.transform)
        ? rotationExtractAndRound(e.transform)
        : 0;
      console.log("rotation");
      console.log(rotation);
      if (interaction == "resize") {
        if (e.delta[0]) {
          e.target.style.width = `${e.width}px`;
        }
        if (e.delta[1]) {
          e.target.style.height = `${e.height}px`;
        }
      }
      if (interaction == "rotate") {
        applyRotation(e);
      }
      handleMovement(
        image,
        finalX,
        finalY,
        e.width * scaleX,
        e.height * scaleX,
        rotation
      );
    }
    const moveable = new Moveable(document.querySelector(".video-js"), {
      dragArea: false,
      draggable: true,
      container: document.querySelector(".video-js"),
      bounds: document.querySelector(".video-js").getBoundingClientRect(),
      resizable: true,
      scalable: false,
      rotatable: true,
      warpable: false,
      // Enabling pinchable lets you use events that
      // can be used in draggable, resizable, scalable, and rotateable.
      pinchable: false, // ["resizable", "scalable", "rotatable"]
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
      handleNewUserInteraction(e, "move");
    });
    moveable.on("rotate", (e) => {
      handleNewUserInteraction(e, "rotate");
    });
    moveable.on("resize", (e) => {
      handleNewUserInteraction(e, "resize");
    });
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
