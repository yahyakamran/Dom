let nameElement = document.getElementById("name").innerHTML;
let text = document.getElementById("text").innerHTML;
let textInput = document.getElementById("textInput");
let nameInput = document.getElementById("nameInput");

const HandleChange = () => {
  nameElement = nameInput.value;
  document.getElementById("name").innerHTML = nameElement;
};

function HandleTextChange() {
  text = textInput.value;
  document.getElementById("text").innerHTML = text;
}
