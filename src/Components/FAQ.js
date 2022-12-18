import React from 'react'

export const FAQ = () => {
    return (
        <div className='FAQ'>
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
    )
}
