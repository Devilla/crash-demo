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
    ctx.strokeStyle = 'green'; // Green color
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

    // place the rocket image at the end of the graph
    imgObj.onload = function() {
      ctx.drawImage(imgObj, width-50, height-func((width-50) / 4)-50, 50, 50);
    };

    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={400} height={200} />;
};

export default ExponentialGraphCanvas;
