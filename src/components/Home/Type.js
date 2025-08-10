import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Mobile Application Developer",
          "Android Developer",
          "Java Developer",
          "Kotlin Developer",
          "React Native Developer",
          "Flutter Developer",
          "iOS Developer",
          "Mobile UI/UX Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
