import { useState, useEffect, useRef } from 'react';
import swal from 'sweetalert';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export const useGameInterval = (hunger, setHunger, happiness, setHappiness, health, setHealth, age, setAge) => {
    // Hook para ejecutar un intervalo
    useInterval(() => {
        setAge(age + 1);
        setHunger(hunger - 2);
        setHappiness(happiness - 1);
        setHealth(health - 1);

        if (hunger <= 0 || happiness <= 0 || health <= 0) {
            swal({
                title: 'Tamagoshi ha muerto',
                text: '¿Quieres reiniciar el juego?',
                icon: 'warning',
                buttons: ['Cancelar', 'OK'],
                dangerMode: true,
                content: {
                    element: 'div',
                    attributes: {
                        className: 'custom-swal-text, custom-swal'
                    }
                }
            }).then((result) => {
                if (result) {
                    // Reiniciar el juego
                    window.location.reload();
                } else {
                    // Cerrar la página
                    window.close();
                }
            },2000);
        }

        // Si la edad del personaje llega a 100, mostramos una alerta y ofrecemos la opción de volver a jugar o salir
        if (age >= 100) {
            swal({
                title: 'Felicitaciones',
                text: 'Has completado el juego. ¿Quieres volver a jugar o salir?',
                icon: 'success',
                buttons: ['Volver a jugar', 'Salir'],
                content: {
                    element: 'div',
                    attributes: {
                        className: 'custom-swal-text, custom-swal'
                    }
                }
            }).then((result) => {
                if (result) {
                    // Reiniciar el juego
                    window.location.reload();
                } else {
                    // Cerrar la página
                    window.close();
                }
            });
        }
    }, 30000);
};
