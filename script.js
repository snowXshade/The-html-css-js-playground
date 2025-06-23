var list = document.getElementById("list");
var ul = document.getElementById("ul");
var input = document.getElementById("task-input");
var btn = document.getElementById("btn");

function addTask() {
inputValue = input.value;
// console.log(inputValue);

var li = document.createElement("li");
li.textContent = inputValue;

ul.appendChild(li);

input.value="";
}