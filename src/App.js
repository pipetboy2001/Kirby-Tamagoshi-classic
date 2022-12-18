import React, { useState, useEffect, useRef } from 'react';
import swal from 'sweetalert';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const TamagoshiGame = () => {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);

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
    setHealth(health + 5 > 100 ? 100 : health + 5);
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

      <details>
        <summary>Preguntas frecuentes (FAQ)</summary>
        <br />
        <p><strong>¿Cómo empiezo a jugar?</strong></p>
        <p>Para empezar a jugar, solo tienes que ejecutar el código de "TamagoshiGame" en un entorno de ejecución de JavaScript. Esto debería mostrar la interfaz del juego en tu navegador.</p>
        <br />
        <p><strong>¿Qué hago para mantener a Tamagoshi vivo?</strong></p>
        <p>Para mantener a Tamagoshi vivo, debes asegurarte de que sus parámetros de hambre, felicidad y salud no lleguen a cero. Puedes hacerlo utilizando los botones de la interfaz del juego:</p>
        <ul>
          <li>El botón "Feed" (Alimentar) aumenta la hambre de Tamagoshi en 10 unidades.</li>
          <li>El botón "Play" (Jugar) aumenta la felicidad de Tamagoshi en 10 unidades.</li>
          <li>El botón "Heal" (Curar) aumenta la salud de Tamagoshi en 5 unidades.</li>
        </ul>
        <br />
        <p><strong>¿Cuánto tiempo tengo para mantener a Tamagoshi vivo?</strong></p>
        <p>Tamagoshi vivirá hasta que alcance la edad de 99 años, o hasta que uno de sus parámetros de hambre, felicidad o salud llegue a cero. Si uno de estos parámetros llega a cero, se mostrará una alerta y tendrás la opción de reiniciar el juego o cerrar la página.</p>
        <p><strong>¿Cómo puedo saber si Tamagoshi está vivo o muerto?</strong></p>
        <p>Puedes ver el estado actual de Tamagoshi a través de las barras de progreso que se muestran en la interfaz del juego. Cada barra representa uno de los parámetros de Tamagoshi (hambre, felicidad o salud) y su color indica el nivel actual de ese parámetro: verde para valores altos, amarillo para valores medios y rojo para valores bajos.</p>
        <br />
        <p><strong>¿Cómo puedo saber si Tamagoshi está hambriento, triste o enfermo?</strong></p>
        <p>Para saber si Tamagoshi está hambriento, triste o enfermo, puedes ver los valores de sus parámetros en la interfaz del juego. Si el valor de un parámetro es menor o igual a 30, Tamagoshi estará hambriento, triste o enfermo, respectivamente.</p>
        <br />
        <p><strong>¿Hay algún objetivo final en el juego?</strong></p>
        <p>El objetivo final del juego es mantener a Tamagoshi vivo durante el mayor tiempo posible. Cada vez que consigues mantener a Tamagoshi vivo durante un tiempo prolongado, podrás decir que has superado un nivel en el juego. ¡Intenta mantener a Tamagoshi vivo durante la mayor cantidad de tiempo posible!</p>
        <p><strong>¿Cómo puedo saber si Tamagoshi ha muerto de viejo, de hambre o de enfermedad?</strong></p>
        <p>Si Tamagoshi muere de viejo, verás una imagen triste y un mensaje de alerta en tu navegador. Si muere de hambre o de enfermedad, verás una imagen triste y un mensaje de alerta en tu navegador. En ambos casos, el juego se reiniciará automáticamente.</p>
      </details>


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
