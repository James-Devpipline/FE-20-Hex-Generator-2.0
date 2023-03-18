/* 
Random Hex Generator

Following the provided high fidelity mockup, use HTML, css, and vanilla JS to create a project that generates a random background color when a button is clicked.
-Must contain the elements in the mock design and reflect it next to perfect.
 - title bar
 - randomly generated hexadecimal color value
 - the background color of the main content should reflect the hexadecimal value
 - current hexadecimal value should be rendered to the page
 - at least 1 transistion / pseudo state effect
*/

let hexFinal = "";
const backgroundQuerySelector = document.querySelector(".page-content");

const hexCodeTextElement = document.getElementById("hexCodeText");

const headerReplacement = document.createElement(`h4`);

function randomHexGenerator() {
  const hexCharacters = "ABCDEF1234567890";
  hexFinal = "#";

  for (let i = 0; i < 6; i++) {
    hexFinal += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }
  return hexFinal;
}

function hexButtonClicked() {
  randomHexGenerator();

  backgroundQuerySelector.style.backgroundColor = hexFinal;

  hexCodeTextElement.removeChild(hexCodeTextElement.firstChild);

  hexCodeTextElement.appendChild(document.createTextNode(hexFinal));
}
