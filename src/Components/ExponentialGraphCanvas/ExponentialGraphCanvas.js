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
      let currentX = 0;

      const animateLine = () => {
        if (currentX >= width) {
          return;
        }

        const y = height - func(currentX / 4); // Adjust scale and position
        ctx.lineTo(currentX, y);
        ctx.stroke();

        currentX++;

        requestAnimationFrame(animateLine);
      };

      animateLine();
    }

    ctx.stroke();
  }, []);

  const maxWidth = window.innerWidth; // Set the maximum width for the canvas to the screen width
  const innerHeight = window.innerHeight; // Set the height of the canvas to the screen height
  return <canvas ref={canvasRef} width={Math.min(maxWidth, window.innerWidth)} height={innerHeight} />;
};

export default ExponentialGraphCanvas;
