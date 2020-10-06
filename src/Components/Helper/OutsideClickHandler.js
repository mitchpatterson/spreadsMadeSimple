import React, { useRef, useEffect } from "react";

// I TAKE NO CREDIT FOR THIS CODE - it was found here: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

function useOutsideHandler(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
}

export default function OutsideHandler(props) {
  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef, props?.callback);
  return <div ref={wrapperRef}>{props.children}</div>;
}
