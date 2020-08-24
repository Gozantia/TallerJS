let tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];
  let mostrarTarea = () => {
    let tarea_container = document.getElementById("tarea_container");
    for (let i = 0; i < tasks.length; i++) {
      tarea_container.innerHTML += `
      <input type="checkbox" ${tasks[i].completed == true ? "checked" : ""} />
        <label class="${tasks[i].completed == true ? "complete" : ""}">${
        tasks[i].name}</label>
    `;
    }
    document.getElementById(
      "tarea_sum"
    ).innerHTML = `Tienes ${tasks.length} tareas.`;
  };
  document.addEventListener("", mostrarTarea());
  
  function update(event) {
    console.log(event.target);
  }
  let checkbox = document
    .getElementById("tarea_container")
    .addEventListener("click", update);
  