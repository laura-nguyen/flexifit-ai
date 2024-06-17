import { useRef, useState, useEffect } from "react";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton, calculateAngle } from "./../../utils/utils.js";
import "./Test.scss"

const Test = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [pose, setPose] = useState(null);
    const [counter, setCounter] = useState(0);
    const [stage, setStage] = useState('down');
    const [angle, setAngle] = useState(0);
    const canCountRef = useRef(true); // useRef to manage canCount
    
    useEffect(() => {
        runPosenet();
    }, []);

    const runPosenet = async () => {
        const net = await posenet.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: { width: 640, height: 480 },
            multiplier: 0.75
        });

        const interval = setInterval(() => {
            detect(net);
        }, 100);
        return () => clearInterval(interval);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const pose = await net.estimateSinglePose(video, {
                flipHorizontal: false
            });
            setPose(pose);

            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
            countReps(pose);
        }
    };

    const countReps = (pose) => {
        const confidenceThreshold = 0.35; // Set a confidence threshold
        const leftShoulder = pose.keypoints.find(point => point.part === 'leftShoulder' && point.score > confidenceThreshold);
        const leftElbow = pose.keypoints.find(point => point.part === 'leftElbow' && point.score > confidenceThreshold);
        const leftWrist = pose.keypoints.find(point => point.part === 'leftWrist' && point.score > confidenceThreshold);
    
        if (leftShoulder && leftElbow && leftWrist) {
            const angle = calculateAngle(leftShoulder.position, leftElbow.position, leftWrist.position);
            setAngle(angle); 
    
            if (angle > 130) {
                setStage("down");
                canCountRef.current = true; // Allow counting on the next up
                console.log('Stage changed to down');
            } else if (angle < 50 && stage === 'down' && canCountRef.current) {
                setStage("up");
                setCounter(prevCounter => {
                    console.log('Reps counted:', prevCounter + 1);
                    return prevCounter + 1;
                });
                canCountRef.current = false; // Prevent counting until angle is greater than 140
                console.log('Stage changed to up');
            }
        } else {
            console.log("Key points not detected or not confident enough");
        }
    };
    

    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d");
        canvas.current.width = videoWidth;
        canvas.current.height = videoHeight;

        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-videoWidth, 0);
        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
        ctx.restore();

        ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
        drawKeypoints(pose.keypoints, 0.6, ctx);
        drawSkeleton(pose.keypoints, 0.7, ctx);

    };

    return (
        <main className="main__container">
            <div className="webcam__container">
            <Webcam ref={webcamRef} style={{
                    // position: "absolute",
                    width: "0.1px",
                 
                    // marginLeft: "auto",
                    // marginRight: "auto",
                    // left: 0,
                    // top: 0,
                    // right: 0,
                    textAlign: "center",
                    zindex: 9,
                    // width: 640,
                    // height: 480,
                    transform: "scaleX(-1)", // Mirror the webcam video
                    
                }} />
                
                <canvas ref={canvasRef} className="canvas-mirror"  />
                
            </div>
            <div>
                    <div>Reps: {counter}</div>
                    <div>Stage: {stage}</div>
                    <div>Angle: {angle.toFixed(2)}</div>
            
            </div>
        </main>
    );
};

export default Test;
``
