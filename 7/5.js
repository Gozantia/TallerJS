let numbers = [345, 123, 34, 434, 432, 112];

let average = (arr) => {
  let acc5= 0;
  for (let index = 0; index < arr.length; index++) {
    acc5 += arr[index];
  }
  console.log(acc5 / arr.length);
};

average(numbers);
