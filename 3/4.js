let age = 7;

if (age == 1) {
  age = 15;
} else if (age == 2) {
  age = 15 + 9;
} else if (age >= 3) {
  age = 15 + 9 + 5 * (age - 3);
}

console.log(`Tu mascota tiene ${age} años`);
