// -*- coding: utf-8 -*-
// JavaScript
var button = document.getElementById("myButton");
var text = document.getElementById("myText");

button.addEventListener("click", function() {
    text.textContent = "Botao clicado!";
});
