import React, { useState, useEffect, useRef } from 'react';
import swal from 'sweetalert';
import { ProgressBar } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCaretSquareRight, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Game = () => {
    // Estados para los parámetros de Tamagoshi
    const [hunger, setHunger] = useState(50);
    const [happiness, setHappiness] = useState(50);
    const [age, setAge] = useState(0);
    const [health, setHealth] = useState(100);
    const [record, setRecord] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);


    // Hook para ejecutar un intervalo
    let tamagoshiImage;
    //si hambre es menor o igual a 30 o felicidad es menor o igual a 30 o salud es menor o igual a 30
    if (hunger <= 30 || happiness <= 30 || health <= 30) {
        tamagoshiImage = 'https://i.imgur.com/Okh86g4.png';
    }
    //si hambre es igual a 0 o felicidad es igual a 0 o salud es igual a 0
    else if (hunger === 0 || happiness === 0 || health === 0) {
        tamagoshiImage = 'https://i.imgur.com/29jrgnP.png';

    }
    //si hambre es mayor a 90 o felicidad es mayor a 90 o salud es mayor a 90
    else if (happiness > 90 && hunger > 95 && health > 90) {
        tamagoshiImage = 'https://i.imgur.com/kQooJxm.png';
    }
    //si hambre es mayor a 80 y felicidad es mayor a 80 y salud es mayor a 80
    else if (hunger > 80 && happiness > 80 && health > 80) {
        tamagoshiImage = 'https://i.imgur.com/wWoMWxA.png';
    }
    //si hambre es mayor a 30 y felicidad es mayor a 30 y salud es mayor a 30
    else if (hunger > 30 && happiness > 30 && health > 30) {
        tamagoshiImage = 'https://i.imgur.com/EHOnPps.png';
    }
    // Función para actualizar la edad del Tamagoshi
    useInterval(() => {
        setAge(age + 1);
        if (age === 99) {
            swal({
                title: 'Tamagoshi has died of old age, Congartulation!',
                text: 'Do you want to restart the game?',
                icon: 'warning',
                buttons: ['Cancel', 'OK'],
                dangerMode: true,
                content: {
                    element: 'div',
                    attributes: {
                        className: 'custom-swal-text, custom-swal'
                    }
                }
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
    }, 30000);

    // Función para actualizar el tiempo de juego
    useInterval(() => {
        setElapsedTime(elapsedTime + 1);
    }, 1000); // Actualiza cada segundo


    // Función para actualizar el estado de hambre del Tamagoshi
    useInterval(() => {
        setHunger(hunger - 1);
        if (hunger === 0) {
            swal({
                title: 'Tamagoshi has died of starvation',
                text: 'Do you want to restart the game?',
                icon: 'warning',
                buttons: ['Cancel', 'OK'],
                dangerMode: true,
                content: {
                    element: 'div',
                    attributes: {
                        className: 'custom-swal-text, custom-swal'
                    }
                }
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
    // Función para actualizar el estado de felicidad del Tamagoshi
    useInterval(() => {
        setHappiness(happiness - 1);
    }, 4000);
    // Función para actualizar el estado de salud del Tamagoshi
    useInterval(() => {
        setHealth(health - 1);
        if (health === 0) {
            swal({
                title: 'Tamagoshi has died',
                text: 'Do you want to restart the game?',
                icon: 'warning',
                buttons: ['Cancel', 'OK'],
                dangerMode: true,
                content: {
                    element: 'div',
                    attributes: {
                        className: 'custom-swal-text, custom-swal'

                    }
                }
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

    // Función para actualizar el estado de hambre del Tamagoshi
    const feed = () => {
        setHunger(hunger + 10 > 100 ? 100 : hunger + 10);
    };

    // Función para actualizar el estado de felicidad del Tamagoshi
    const play = () => {
        setHappiness(happiness + 10 > 100 ? 100 : happiness + 10);
    };

    // Función para actualizar el estado de salud del Tamagoshi
    const heal = () => {
        setHealth(health + 5 > 100 ? 100 : health + 5);
    };

    // Función para obtener el color de la barra de progreso
    const getProgressBarColor = (value) => {
        if (value > 80) {
            return 'success';
        } else if (value > 30) {
            return 'warning';
        } else {
            return 'danger';
        }
    };

    // Función para actualizar el record de edad
    const updateRecord = () => {
        if (age > record) {
            setRecord(age);
            localStorage.setItem('record', age);
        }
    }

    // Formatea el tiempo de juego
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    // Agrega un 0 a la izquierda si el número es menor a 10
    const elapsedTimeFormatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Actualiza el record de edad cuando cambia la edad
    useEffect(updateRecord, [age, record]);
    // Carga el record de edad desde el localStorage
    useEffect(() => {
        // Código que utiliza la variable "record"
        const storedRecord = localStorage.getItem('record');
        if (storedRecord) {
            setRecord(parseInt(storedRecord));
        }
    }, []);

    return (
        <div className="egg">
            <h1 className="character-name">Kirby</h1>
            <h2 className="character-age">Edad: {age} Años</h2>
            <h2 className="character-age">Record: {record} Años</h2>
            <button onClick={() => setShowModal(true)}>Estado</button>
            <div className="square">
                <img src={tamagoshiImage} alt="Imagen del cuadrado" />
            </div>
            <div className="buttons">
                <button onClick={() => setHunger(Math.min(hunger + 10, 100))}>Comer</button>
                <button onClick={() => setHappiness(Math.min(happiness + 10, 100))}>Jugar</button>
                <button onClick={() => setHealth(Math.min(health + 10, 100))}>Sanar</button>
            </div>
            <h1 className="character-name">Tiempo de juego: {elapsedTimeFormatted} Seg.</h1>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Estado del Kirby</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Edad: {age} Años
                    <br></br>
                    Hambre: <ProgressBar now={hunger} variant="warning" label={`${hunger}%`} />
                    Felicidad: <ProgressBar now={happiness} variant="success" label={`${happiness}%`} />
                    Salud: <ProgressBar now={health} variant="info" label={`${health}%`} />
                    
                </Modal.Body>

            </Modal>
        </div>
    )
}

/* La función useInterval toma dos argumentos:
callback: La función que se ejecutará de manera periódica.
  delay: El tiempo en milisegundos entre cada ejecución de la función. */
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
