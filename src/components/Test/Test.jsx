import { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenes from "@tensorflow-models/posenet"
import Webcam from "react-webcam"

const Test = () => {
    return (
        <>
       <Webcam
   
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas

          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        </>
    )
}

export default Test;