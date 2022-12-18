import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FAQ } from './Components/FAQ';
import { Game } from './Components/Game';

const TamagoshiGame = () => {
  return (
    <>
      {/* Tamagoshi */}
      <Game />
      {/* FAQ */}
      <FAQ />
    </>

  );
};

export default TamagoshiGame;
