var ul = document.getElementById("ul");
var dUl =document.getElementById('doneUl');
var input = document.getElementById("task-input");
var btn = document.getElementById("btn");


// MAIN FUNCTION WHICH WORKS AFTER CLICKING "ADD"
function addTask() {
  const inputValue = input.value.trim();
  if (!inputValue) return;

  // Create list item and inner HTML
  const li = document.createElement("li");
  li.innerHTML = `
    <div class='list-div'>
      <h2 class='donebtn'>Done</h2>
      <h2 class='list-value'>${inputValue}</h2>
      <h2 class='delbtn'>X</h2>
    </div>
  `;

  // Attach event listeners after appending to DOM
  const donebtn = li.querySelector('.donebtn');
  const delbtn = li.querySelector('.delbtn');
  const text = li.querySelector('.list-value');

  donebtn.addEventListener("click", () => {

  
    var cli = document.createElement('li');
    cli.innerHTML=`
    <div class='list-div'>
      <h2 class='list-value'>${inputValue}</h2>
      <h2 class='ddelbtn'>X</h2>
    </div>
  `;
    var text1 = cli.querySelector('.list-value');

    text1.style.textDecoration = "line-through";
    text1.style.color = "gray";

    dUl.appendChild(cli);
    li.remove();

    const ddelbtn = cli.querySelector('.ddelbtn');
    ddelbtn.addEventListener("click", () => {
    cli.remove();
  });


  });

  delbtn.addEventListener("click", () => {
    li.remove();
  });

  ul.appendChild(li);
  input.value = "";
}
