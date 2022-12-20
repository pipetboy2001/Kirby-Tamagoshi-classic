import { useState } from 'react';

export const getTamagoshiImage = (hunger, happiness, health) => {
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
    return tamagoshiImage;
}
