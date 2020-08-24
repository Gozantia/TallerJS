
const mensaje = () => {
  const obra1 = document.getElementById("obra1").value;
  const obra2 = document.getElementById("obra2").value;
  let arr = [obra1, obra2];
  for (const obras of arr) {
    document.querySelector(".mensaje").innerHTML += 
      `¡A mí también me encantó "${obras}"! Tenemos mucho en común, humana.`
    ;
  }
};
let btn = document.getElementById("btn_submit");
btn.addEventListener("click", mensaje);
