import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getTamagoshiImage } from './FuncionesGame/TamagoshiImage';
import { useGameInterval } from './FuncionesGame/GameInterval';
import './../css/Game.css';

const Game = () => {
    // Estados para los parámetros de Tamagoshi
    const [hunger, setHunger] = useState(50);
    const [happiness, setHappiness] = useState(50);
    const [age, setAge] = useState(0);
    const [health, setHealth] = useState(100);
    const [showModal, setShowModal] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    // Recuperamos el récord de edad del almacenamiento local
    const record = localStorage.getItem('record');

    useEffect(() => {
        const intervalId = setInterval(() => setElapsedTime(elapsedTime + 1), 1000);
        const intervalId1 = setInterval(() => setHunger(hunger - 2), 2000);
        const intervalId2 = setInterval(() => setHappiness(happiness - 3), 2000);
        const intervalId3 = setInterval(() => setHealth(health - 1), 2000);
        const intervalId4 = setInterval(() => setAge(age + 1), 120000);


        return () => {
            clearInterval(intervalId);
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
            clearInterval(intervalId4);
        };
    }, [elapsedTime]);

    // Configuramos los intervalos de actualización de edad y hambre del Tamagoshi
    useGameInterval(hunger, setHunger, happiness, setHappiness, health, setHealth,age,setAge);

    // Obtenemos la imagen a mostrar en base al estado del Tamagoshi
    const tamagoshiImage = getTamagoshiImage(hunger, happiness, health);
    // Si la edad actual es mayor que el récord de edad, actualizamos el récord
    if (age > record) {
        localStorage.setItem('record', age);
    }

    return (
        <div className="egg">
            <h1 className="character-name">Nombre Personaje</h1>
            <h2 className="character-age">Edad: {age}</h2>
            <h2 className="character-age">Record: {record}</h2>
            <button onClick={() => setShowModal(true)}>Estado</button>
            <div className="square">
                <img src={tamagoshiImage} alt="Imagen del cuadrado" />
            </div>
            <div className="buttons">
                <button onClick={() => setHunger(Math.min(hunger + 10, 100))}>Comer</button>
                <button onClick={() => setHappiness(Math.min(happiness + 10, 100))}>Jugar</button>
                <button onClick={() => setHealth(Math.min(health + 10, 100))}>Sanar</button>
            </div>
            <h1 className="character-name">Tiempo de juego: {elapsedTime} Seg.</h1>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Estado del Tamagoshi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Hambre: {hunger}<br />
                    Felicidad: {happiness}<br />
                    Salud: {health}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Game;

