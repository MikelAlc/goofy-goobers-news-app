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


  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }


  const clearCanvas = () => {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasSize, canvasSize);
  }

  function keyContols(event) {
      event.preventDefault();
      const speed = canvasSize/3;
      const firstPosition = 0;
      const secondPosition = (canvasSize/3);
      const thirdPosition = (canvasSize/3)*2;
      let score=0;

      console.log(event.key, event.keyCode);
      console.log(boardPosition);
      if (event.keyCode === 40) { // DOWN
          if(squareY==firstPosition){
              squareY += speed;
              if(squareX==firstPosition) swap(boardPosition,0,3);
              if(squareX==secondPosition) swap(boardPosition,1,4);
              if(squareX==thirdPosition) swap(boardPosition,2,5);
              score++;
          }
          else if(squareY==secondPosition){
              squareY += speed;
              if(squareX==firstPosition) swap(boardPosition,3,6);
              if(squareX==secondPosition) swap(boardPosition,4,7);
              if(squareX==thirdPosition) swap(boardPosition,5,8);
              score++;
          }


          drawBoard();
          console.log("gere");
      }
      if (event.keyCode === 38) { // UP
          if(squareY==secondPosition){
              squareY -= speed;
              if(squareX==firstPosition) swap(boardPosition,3,0);
              if(squareX==secondPosition) swap(boardPosition,4,1);
              if(squareX==thirdPosition) swap(boardPosition,5,2);
              score++;
          }
          else if(squareY==thirdPosition){
              squareY -= speed;
              if(squareX==firstPosition) swap(boardPosition,6,3);
              if(squareX==secondPosition) swap(boardPosition,7,4);
              if(squareX==thirdPosition) swap(boardPosition,8,5);
              score++;
          }
          drawBoard();
      }
      if (event.keyCode === 37) { // LEFT
          if(squareX==secondPosition){
              squareX -= speed;
              if(squareY==firstPosition) swap(boardPosition,1,0);
              if(squareY==secondPosition) swap(boardPosition,4,3);
              if(squareY==thirdPosition) swap(boardPosition,6,7);
              score++;
          }
          else if(squareX==thirdPosition){
              squareX -= speed;
              if(squareY==firstPosition) swap(boardPosition,2,1);
              if(squareY==secondPosition) swap(boardPosition,5,4);
              if(squareY==thirdPosition) swap(boardPosition,8,7);
              score++;
          }
          drawBoard();
      }
      if (event.keyCode === 39) { // RIGHT
          if(squareX==firstPosition){
              squareX += speed;
              if(squareY==firstPosition) swap(boardPosition,1,0);
              if(squareY==secondPosition) swap(boardPosition,4,3);
              if(squareY==thirdPosition) swap(boardPosition,6,7);
              score++;
          }
          else if(squareX==secondPosition){
              squareX+= speed;
              if(squareY==firstPosition) swap(boardPosition,2,1);
              if(squareY==secondPosition) swap(boardPosition,5,4);
              if(squareY==thirdPosition) swap(boardPosition,8,7);
              score++;
          }
          drawBoard();
      }
    }

  const startGame = () => {
    canvas.removeEventListener('click', startGame);

    boardPosition=[4, 6, 8, 2, 0, 3, 7, 1, 5];
    squareX=140;
    squareY=140;
    canvas.addEventListener('keydown',keyContols);

    console.log("start");
    drawBoard();

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


  const drawBoard = () => {

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

      if (boardPosition.toString()=="1,2,3,4,5,6,7,8,0") {
        endGame();
      }


  }

  const endGame = () => {

    // Display the final score
    clearCanvas();
    ctx.fillStyle = '#000000';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Nice ', canvas.width / 2, canvas.height / 2);
    ctx.fillText('Click to Play Again',canvas.width / 2, canvas.height / 2 + 30);
    canvas.addEventListener('click', startGame);

}

  return (<div>
    <h1>8-Puzzle</h1>
    <div className='centered'>
      <canvas ref={canvasRef} id="myCanvas" width={canvasSize} height={canvasSize} tabIndex="0" ></canvas>
    </div>
  </div>)
}

export default Puzzle8Page
