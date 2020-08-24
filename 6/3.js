const geekGirl1showBio = {
    name: "Susana",
    age: "34",
    occupation: "periodista"
    }
    geekGirl1showBio.sayHello  = function (){
        return  'Mi nombre es'+ ' ' + this.name + ' ' + 'tengo' +' '+ this.age +' '+ 'años y soy' + ' ' + this.occupation;
    };
    
document.getElementById("containershowBio").innerHTML = geekGirl1showBio.sayHello();
document.getElementById("containershowBio").innerHTML += "´<br/>´" 
const geekGirl2showBio = {
    name: "Rocio",
    age: "25",
    occupation: "actriz",
  };
  geekGirl2showBio.sayHello  = function (){
    return  'Mi nombre es'+ ' ' + this.name + ' ' + 'tengo' +' '+ this.age +' '+ 'años y soy' + ' ' + this.occupation;
};
document.getElementById("containershowBio").innerHTML += geekGirl2showBio.sayHello();

//No se tuvo que modificar mucho el código para el segundo objeto.