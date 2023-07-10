import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState, useRef } from 'react';

import img0 from 'web/public/img/puzzle0.jpg'
import img1 from 'web/public/img/puzzle1.jpg'
import img2 from 'web/public/img/puzzle2.jpg'
import img3 from 'web/public/img/puzzle3.jpg'
import img4 from 'web/public/img/puzzle4.jpg'
import img5 from 'web/public/img/puzzle5.jpg'
import img6 from 'web/public/img/puzzle6.jpg'
import img7 from 'web/public/img/puzzle7.jpg'
import img8 from 'web/public/img/puzzle8.jpg'


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
      /*
      console.log(event.key, event.keyCode);
      console.log(boardPosition);
      */
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


    function isSolvable(){
      let invCount = 0;
      for (let i = 0; i < boardPosition.length - 1; i++) {
        for (let j = i + 1; j < boardPosition.length; j++) {
          if (boardPosition[j] !== 0 && boardPosition[i] !== 0 && boardPosition[i] > boardPosition[j]) {
            invCount++;
          }
        }
      }
      return (invCount % 2 == 0);
    }

  const startGame = () => {
    canvas.removeEventListener('click', startGame);

    do{
      boardPosition.sort(() => (Math.random() > .5) ? 1 : -1);  // randomize puzzle
    }while(!isSolvable());



    squareX=(canvasSize/3) * (boardPosition.indexOf(0) % 3);
    squareY=(canvasSize/3) * Math.floor(boardPosition.indexOf(0) / 3);
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

      // draw images
      for (let i = 0; i < boardPosition.length; i++){
        ctx.drawImage(document.getElementById('img' + boardPosition[i]),
                      (canvasSize / 3) * (i % 3),
                      (canvasSize / 3) * Math.floor(i / 3));
      }


      //Draws the numbers in the correct position
      ctx.fillStyle = 'white';
      for (let i = 0; i < boardPosition.length; i++) {
        ctx.fillText(boardPosition[i], (canvasSize / 3) * (i % 3) + (canvasSize / 5.8), (canvasSize / 3) * Math.floor(i / 3) + (canvasSize / 5.5));
      }

      //Draw Black Square
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(squareX, squareY, cellSize, cellSize);



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
    canvas.removeEventListener('keydown', keyContols)
    canvas.addEventListener('click', startGame);

}

  {/* images cannot be drawn into canvas from import, so I placed them in an invisible div*/}

  return (<div>
    <h1>8-Puzzle</h1>
    <div className='centered'>
      <canvas ref={canvasRef} id="myCanvas" width={canvasSize} height={canvasSize} tabIndex="0" ></canvas>
    </div>
    <div style={{display: 'none'}}>
      <img id="img0" src={img0} alt="Goofy Goober Logo" ></img>
      <img id="img1" src={img1} alt="Goofy Goober Logo" ></img>
      <img id="img2" src={img2} alt="Goofy Goober Logo" ></img>
      <img id="img3" src={img3} alt="Goofy Goober Logo" ></img>
      <img id="img4" src={img4} alt="Goofy Goober Logo" ></img>
      <img id="img5" src={img5} alt="Goofy Goober Logo" ></img>
      <img id="img6" src={img6} alt="Goofy Goober Logo" ></img>
      <img id="img7" src={img7} alt="Goofy Goober Logo" ></img>
      <img id="img8" src={img8} alt="Goofy Goober Logo" ></img>
    </div>

  </div>)
}

export default Puzzle8Page
