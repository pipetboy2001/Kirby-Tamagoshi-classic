import 'bootstrap/dist/css/bootstrap.css';
import  FAQ  from './Components/FAQ';
import { Game } from './Components/Game';
import { useState } from 'react';

const TamagoshiGame = () => {
  const [isFAQVisible, setIsFAQVisible] = useState(false);

  const toggleFAQ = () => {
    setIsFAQVisible(!isFAQVisible);
  }

  return (
    <>
      <div className='fondo'>
        {/* Tamagoshi */}
        <Game />
        {/* FAQ */}
        {isFAQVisible && <FAQ toggleFAQ={toggleFAQ} />}
        <button style={{ backgroundColor: '#080c51' ,color:'white' }} onClick={toggleFAQ}>Ver Preguntas Frecuentes</button>

      </div>
      </>
  );
};

export default TamagoshiGame;
