import { Fade } from "react-awesome-reveal";
import React from "react";

export default function JulesFace() {
  return (
    <Fade direction="up" triggerOnce>
      <img
        src="/julian-1.png"
        className="mx-auto rounded-full w-36 mt-6 mb-4"
        alt="Julian's face"
      />
    </Fade>
  );
}
