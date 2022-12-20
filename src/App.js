import 'bootstrap/dist/css/bootstrap.css';
import  FAQ  from './Components/FAQ';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Egg from './Components/Game';


const TamagoshiGame = () => {
  const [isFAQVisible, setIsFAQVisible] = useState(false);

  const toggleFAQ = () => {
    setIsFAQVisible(!isFAQVisible);
  }

  return (
    <>
      <div className='fondo'>
        {/* Tamagoshi */}
        <Egg />

        {/* FAQ */}
        {isFAQVisible && <FAQ toggleFAQ={toggleFAQ} />}
        <button style={{ backgroundColor: '#080c51', color: 'white' }} onClick={toggleFAQ}>
          <FontAwesomeIcon icon={faQuestionCircle} /> Ver Preguntas Frecuentes
        </button>

      </div>
      </>
  );
};

export default TamagoshiGame;
