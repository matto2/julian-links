import { Fade } from "react-awesome-reveal";
import React from "react";

export default function JulesFace() {
  return (
    <Fade direction="up" triggerOnce>
      <img
        src="/julian-1.jpg"
        className="mx-auto rounded-full w-56 large:w-60 mt-6 mb-1"
        alt="Julian's face"
      />
    </Fade>
  );
}
