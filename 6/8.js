const btn_cambiar = document.getElementById("btn8");

const status = {
    current: "",
    getRandomInt: function () {
      return Math.floor(Math.random() * (100 - 1)) + 1;
    },
  };
  
function cambiar() {
  let value = document.getElementById("selector").value;
  let status_container = document.getElementById("status_container");
  let body = document.querySelector(".body8");
  value == "sad" ? (status.current = ":(") : (status.current = ":)");
  status_container.innerHTML = status.current;
  status.getRandomInt() % 2 == 0
    ? body.classList.remove("bg-sad")
    : body.classList.add("bg-sad");
}
btn_cambiar.addEventListener("click", cambiar);
