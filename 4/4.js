const ancho = (caja, width, padding, border) => {
    if (caja == true) {      
      return width - padding * 10 - border * 1;
    } else {
      return width + padding * 10 + border * 1;
    }
  };
  
  console.log( ancho(true, 200, 10, 10));
  console.log(ancho(false, 500, 10, 10));
  