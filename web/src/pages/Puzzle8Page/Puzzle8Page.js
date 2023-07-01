import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState, useRef } from 'react';

const canvasSize = 420;
let boardPosition = [4, 6, 8, 2, 0, 3, 7, 1, 5];
let canvas;
let ctx;
let squareX = canvasSize / 3;
let squareY = canvasSize / 3;

const Puzzle8Page = () => {

  const canvasRef = useRef(null);
  const [board, setBoard] = useState(boardPosition);
  const [runEffect, setRunEffect] = useState(false);

  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }


  const clearCanvas = () => {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasSize, canvasSize);
  }

  const startGame = () => {
    canvas.removeEventListener('click', startGame);
    console.log("start");
    setRunEffect(true);
    drawBoard;

  }


  const init = useEffect(() => {
    console.log("init");
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    drawMenu();
    canvas.focus();

  }, []);

  const drawMenu = () => {
    console.log("drawMenu");
    clearCanvas;
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.font = '36px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Click to Start', canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial'
    ctx.fillText('Use the arrow keys to move', canvas.width / 2, (canvas.height / 4) * 3);
    clearCanvas;
    canvas.addEventListener('click', startGame);
  }


  const drawBoard = useEffect(() => {
    if (runEffect) {
      console.log("drawing board");

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the size of each grid cell
      const cellSize = Math.min(canvas.width, canvas.height) / 3;

      // Draw the grid lines
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;

      // Vertical lines
      for (let x = 1; x < 3; x++) {
        ctx.beginPath();
        ctx.moveTo(x * cellSize, 0);
        ctx.lineTo(x * cellSize, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 1; y < 3; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * cellSize);
        ctx.lineTo(canvas.width, y * cellSize);
        ctx.stroke();
      }

      //Draws the numbers in the correct position
      for (let i = 0; i < boardPosition.length; i++) {
        ctx.fillText(boardPosition[i], (canvasSize / 3) * (i % 3) + (canvasSize / 5.8), (canvasSize / 3) * Math.floor(i / 3) + (canvasSize / 5.5));
      }

      //Draw Black Square
      ctx.fillStyle = '#000000';
      ctx.fillRect(squareX, squareY, cellSize, cellSize);

    }


  }, [runEffect]);

  return (<div>
    <h1>8-Puzzle</h1>
    <div className='centered'>
      <canvas ref={canvasRef} id="myCanvas" width={canvasSize} height={canvasSize} tabIndex="0" ></canvas>
    </div>
  </div>)
}

export default Puzzle8Page
