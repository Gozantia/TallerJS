'use strict';
const title = document.querySelector('#title');
const nombre = 'Rodolfa';

title.innerHTML =`
    <h1>El nombre de mi compañera es ${nombre}, y está compuesto por ${nombre.length-1} caracteres</h1>
`;