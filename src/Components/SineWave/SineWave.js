import React, { useRef, useEffect } from 'react';
import './SineWave.css';

const SineWave = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let amplitude = 10;
        let phase = 0;
        let speed = 0.5;
        let frequency = 0.05;      

        let imgObj = new Image();
        imgObj.src = 'rocket.png'; 
        // ctx.drawImage(imgObj, 0, 0); // Draw the image at (0, 0)


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            // rotate the sine wave by 45 degrees
            ctx.setTransform(1, -0.5, 0, 1, 0, 0);
            ctx.translate(0, canvas.height / 2);   
            ctx.rotate(Math.PI * 200);

            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + amplitude * Math.sin(frequency * x + phase);
                ctx.lineTo(x/2, y/2);
            }

            ctx.strokeStyle = 'green';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.drawImage(imgObj, 0, 0); // Draw the image at (0, 0)
            
            phase += speed;
            requestAnimationFrame(animate);
        };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        animate();

        return () => cancelAnimationFrame(animate);
    }, []);

    return <canvas id="sine-wave" width="300" height="200" ref={canvasRef} />;

    };

export default SineWave;
