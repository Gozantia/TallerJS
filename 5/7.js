const Inception7 = "Inception";
const theButterFlyEffect7 = "The butterfly effect";
const eternalSunshineOfTheSM7 = "Eternal sunshine of the spotless mind";
const blueVelvet7 = "Blue velvet";
const split7 = "split7";
const btn7 = document.getElementById("btn_empezar7");

const handleFunc7 = (event) => {
  console.log(event.target);
};

const imprimir7 = () => {
  document.getElementById("lista7").innerHTML = `
    <ul id="lista7">
      <li class="element" id="Inception7">${Inception7}</li>
      <li class="element" id="theButterFlyEffect7">${theButterFlyEffect7}</li>
      <li class="element" id="eternalSunshineOfTheSM7">${eternalSunshineOfTheSM7}</li>
      <li class="element" id="blueVelvet7">${blueVelvet7}</li>
      <li class="element" id="split7">${split7}</li>
    </ul>
    `;

  document.getElementById("lista7").addEventListener("click", handleFunc7);
};

btn7.addEventListener("click", imprimir7);

