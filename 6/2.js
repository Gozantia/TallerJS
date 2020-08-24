const geekGirl1Carrera = {
    name: "Susana",
    age: "34",
    occupation: "periodista"
    }
    geekGirl1Carrera.run = ` ¡Estoy corriendo` 
    geekGirl1Carrera.runAMarathon = (distance) => `${distance} kilómetros!`;

  const contentCarrera = `
  <p>${geekGirl1Carrera.name}, 
  ${geekGirl1Carrera.age} años, 
  ${geekGirl1Carrera.occupation
  }.
  ${geekGirl1Carrera.run} una maratón de ${geekGirl1Carrera.runAMarathon('50')} </p>`;

  document.getElementById("containerCarrera").innerHTML = contentCarrera;
  