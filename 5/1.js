const btn = document.querySelector(".btn");
const text = "Gracias";

btn.addEventListener("click", () => {
  return (document.querySelector("#texto").innerHTML = text);
});