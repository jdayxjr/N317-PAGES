"use client";

import { useState } from "react";

export default function Home() {
  const [score, setScore] = useState(1);

  //Deconstructing arrays: 
  //1.the variable names use for the items don't matter
  2.

  //let score=0;

  function addToScore() {
    //score++

    // setScore(score + 1)

    //you can set a new value by passing a new value is the setter function
    // or by passing a new function to the setter function
    setScore(function (value) {
      return value + 1;
    })
    console.log(score)

    function doublePoints() {
      addToScore();
      addToScore();
    }
  }


  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}