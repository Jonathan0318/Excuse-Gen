import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
document.querySelector("#excuse").innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
};

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

const _getWho = () => {
  return _getRandomListItem(whoList);
}

const _getAction = () => {
  return _getRandomListItem(actionList);
}

const _getWhat = () => {
  return _getRandomListItem(whatList);
}

const _getWhen = () => {
  return _getRandomListItem(whenList);
}

function getRandom (anyArry){
  const max = anyArry.length - 1;
  const min = 0;
  const random = getRandomNumber(min, max)
  return anyArry[random];
}