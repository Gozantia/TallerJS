const btn2 = document.querySelector(".btn2");

btn2.addEventListener(
  "click",
  (printOnConsole = () => {
    return console.log(`Hola ${document.querySelector("#nombre").value}`);
  })
);