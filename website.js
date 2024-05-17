"use strict";

/*CHANGE TO RANDOM COLOR OF DIV ELEMENT UPON PAGE LOAD ON ABOUT ME PAGE*/
/*----------------------------------------------------------------------*/
// Define array of colors
const colors = ['red', 'black', 'blue', 'slategray'];

// Have js select a color in the array at random.
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

// Reference targetted div element to change colors.
const divColor = document.getElementById('block1')

// Funtion to change the color of the selected div element.
function getRandomColor()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Changes color of element everytime the paage loads.
window.onload = function()
{
    const randomIndex = Math.floor(Math.random() * colors.length);
    divColor.style.backgroundColor = getRandomColor(randomIndex);
};
/*-----------------------------------------------------------------------*/