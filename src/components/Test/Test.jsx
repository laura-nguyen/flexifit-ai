import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton, calculateAngle } from "./../../utils/utils.js";

const Test = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [pose, setPose] = useState(null);
    const [counter, setCounter] = useState(0);
    const [stage, setStage] = useState('down');
    const [angle, setAngle] = useState(0);
    const [canCount, setCanCount] = useState(true);

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
    
            if (angle > 140) {
                setStage('down');
                setCanCount(true);
                console.log('Stage changed to down');
            } else if (angle < 40 && stage === 'down') {
                setStage('up');
                setCounter(prevCounter => prevCounter + 1);
                setCanCount(false); // Prevent counting until the next down
                console.log('Stage changed to up');
                console.log('Reps counted:', counter + 1);
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

        // Display the angle on the canvas
        const leftElbow = pose.keypoints.find(point => point.part === 'leftElbow');
        if (leftElbow) {
            ctx.font = '18px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(angle.toFixed(2), leftElbow.position.x, leftElbow.position.y);
        }
    };

    return (
        <>
            <Webcam ref={webcamRef} style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
                transform: "scaleX(-1)" // Mirror the webcam video
            }} />
            <canvas ref={canvasRef} style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 8,
                width: 640,
                height: 480,
                transform: "scaleX(-1)" // Mirror the webcam video
            }} />
            <div style={{
                position: "absolute",
                color: "white",
                top: 500,
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "pre-wrap"
            }}>
                {pose && <>
                    <div>Pose Score: {pose.score.toFixed(3)}</div>
                    {/* {pose.keypoints.map((kp) => 
                        `${kp.part}: x=${kp.position.x.toFixed(2)}, y=${kp.position.y.toFixed(2)}, confidence=${kp.score.toFixed(2)}\n`
                    )} */}
                    <div>Reps: {counter}</div>
                    <div>Stage: {stage}</div>
                    <div>Angle: {angle.toFixed(2)}</div>
                </>}
            </div>
        </>
    );
};

export default Test;
``
