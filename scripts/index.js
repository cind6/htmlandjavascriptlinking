"use strict";

console.log("the index.js has begun executing...");

const greeting = document.getElementById("greeting");

const nameTextbox = document.getElementById("nameTextbox");

const pressMeButton = document.getElementById("pressMeButton");

function init(){
    console.log("hello from inside the  init function!")

    pressMeButton.onclick = onPressMeButtonClicked;
}

window.onload = init;


function onPressMeButtonClicked(){

    console.log("hello from iniside the onPressMeButtonClicked() functiona");

    let username = nameTextbox.value;

    greeting.innerHTML = `hello to ${username} from inside the onPressMeButtonClicked function!`;
}
console.assert.log("the index.js has finished executing...");