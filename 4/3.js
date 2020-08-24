function iva(total) {
    return console.log(
      `Precio sin IVA: ${total}, IVA: ${total * 0.19} y Total: ${
        total * 0.19 + total}`
    );
  }
 iva(15000);