import React, { useState, useEffect, useRef } from 'react';
import swal from 'sweetalert';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const TamagoshiGame = () => {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);
  const ageInterval = useRef();
  const hungerInterval = useRef();
  const happinessInterval = useRef();
  const healthInterval = useRef();

  let tamagoshiImage;
  if (hunger <= 30 || happiness <= 30 || health <= 30) {
    tamagoshiImage = '/sad.png';
  } else if (hunger > 30 && happiness > 30 && health > 30) {
    tamagoshiImage = '/happy.png';
  } else {
    tamagoshiImage = '/neutral.png';
  }

  useInterval(() => {
    setAge(age + 1);
    if (age === 99) {
      alert('Tamagoshi has died of old age');
    }
  }, 30000);

  useInterval(() => {
    setHunger(hunger - 1);
    if (hunger === 0) {
      swal({
        title: 'Tamagoshi has died of starvation',
        text: 'Do you want to restart the game?',
        icon: 'warning',
        buttons: ['Cancel', 'OK'],
        dangerMode: true
      }).then((result) => {
        if (result) {
          // Restart the game
          window.location.reload();
        } else {
          // Close the page
          window.close();
        }
      });
    }
  }, 2000);

  useInterval(() => {
    setHappiness(happiness - 1);
  }, 4000);

  useInterval(() => {
    setHealth(health - 1);
    if (health === 0) {
      swal({
        title: 'Tamagoshi has died',
        text: 'Do you want to restart the game?',
        icon: 'warning',
        buttons: ['Cancel', 'OK'],
        dangerMode: true
      }).then((result) => {
        if (result) {
          // Restart the game
          window.location.reload();
        } else {
          // Close the page
          window.close();
        }
      });
    }
  }, 3000);

  const feed = () => {
    setHunger(hunger + 10 > 100 ? 100 : hunger + 10);
  };

  const play = () => {
    setHappiness(happiness + 10 > 100 ? 100 : happiness + 10);
  };

  const heal = () => {
    setHealth(health + 5 >100 ? 100 : health + 5);
  };

  const getProgressBarColor = (value) => {
    if (value > 80) {
      return 'success';
    } else if (value > 30) {
      return 'warning';
    } else {
      return 'danger';
    }
  };



  return (
    <div>
      <h1>Tamagoshi Game</h1>
      <img src={tamagoshiImage} alt="Tamagoshi" />
      <p style={{ fontFamily: 'Arial, sans-serif' }}>Age: {age}</p>
      
      <div>
        <ProgressBar now={hunger} variant={getProgressBarColor(hunger)} />
        <p>Hunger: {hunger}</p>
      </div>
      <div>
        <ProgressBar now={happiness} variant={getProgressBarColor(happiness)} />
        <p>Happiness: {happiness}</p>
      </div>
      <div>
        <ProgressBar now={health} variant={getProgressBarColor(health)} />
        <p>Health: {health}</p>
      </div>
      

      <button className="btn btn-primary" onClick={feed}>Feed</button>
      <button className="btn btn-secondary" onClick={play}>Play</button>
      <button className="btn btn-success" onClick={heal}>Heal</button>

    </div>
  );
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default TamagoshiGame;
