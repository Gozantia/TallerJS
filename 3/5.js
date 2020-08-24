const notification = document.querySelector(".notification");

const siEsSuccess = `
<h1>CORRECTO</h1>
<p>Los datos han sido correctos</p>`;
const siEswarning = `
<h1>AVISO</h1>
<p>Tenga cuidado</p>`;
const siEsError = `
<h1>ERROR</h1>
<p>Ha surgido un error</p>`;

if (notification.classList.contains("success")) {
  notification.innerHTML = siEsSuccess;
} else if (notification.classList.contains("error")) {
  notification.innerHTML = siEsError;
} else if (notification.classList.contains("warning")) {
  notification.innerHTML = siEswarning;
}
