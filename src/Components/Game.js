import React from 'react';
import './../css/Game.css';

class Egg extends React.Component {
    render() {
        return (
            <div className="egg">
                <h1 className="character-name">Nombre Personaje</h1>
                <h2 className="character-age">Edad</h2>
                <button onClick={() => console.log('Clic en el botón arriba del cuadrado')}>Estado</button>
                <div className="square" >
                    <img src="https://i.imgur.com/Okh86g4.png" alt="Imagen del cuadrado" />
                </div>
                <div className="buttons">
                    <button onClick={() => console.log('Clic en el primer botón debajo del cuadrado')}>Comer</button>
                    <button onClick={() => console.log('Clic en el segundo botón debajo del cuadrado')}>Jugar</button>
                    <button onClick={() => console.log('Clic en el tercer botón debajo del cuadrado')}>Sanar</button>
                </div>
            </div>
        );
    }
}
export default Egg;
