import React, { useRef, useEffect } from 'react';

const ExponentialGraphCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    let imgObj = new Image();
    imgObj.src = 'rocket.png'; 

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Define the exponential function (e.g., y = 2^x)
    const func = (x) => Math.pow(2, x);

    // Draw the graph
    ctx.beginPath();
    ctx.strokeStyle = '#ff0000'; // Red color
    ctx.lineWidth = 2;

    for (let x = 0; x < width; x++) {
      const y = height - func(x / 50); // Adjust scale and position
      ctx.lineTo(x, y);
    }

    ctx.stroke();
    ctx.drawImage(imgObj, 0, 0); // Draw the image at (0, 0)
  }, []);

  return <canvas ref={canvasRef} width={400} height={200} />;
};

export default ExponentialGraphCanvas;
