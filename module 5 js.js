/* Задание 5..1
var value=+prompt('Enter value:', '');
var x=typeof value;
if (x=="number" ){
    if (value%2==0) alert("The number is even");
    else alert("The number is odd")
}
else alert("You made a mistake") */

/* Задание 5.3.2
let x=true;
if (typeof x =='number') console.log('x-number');
else if (typeof x == 'string') console.log ('x-string');
else if (typeof x == 'boolean') console.log('x-logical type');
else console.log('type x is undefined '); */

/*Задание 5.4.1
function reverseString(str) { 
    return str.split("").reverse().join("");
 }
 console.log(reverseString("Hello")); */

 /* Задание 5.4.2
 function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(getRandomFloat(1, 100)); */

  /* Задание 5.5
  let array=[12, 4, 15, 98];
  console.log(array.length);
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]); */

 /* Задание 5.6.1
  let arr = [15, 15, 15];
  let firstValue=arr[0];
  let result=true;
  for (const i of arr){
      if (firstValue!=i){
          result=false;
      }
  }
  if(result==true) console.log("true");
  else console.log("false") */

  /* Задание 5.6.2
  let array=["gjl", 33, 78, null, 0, "fljl"];
  let countEven=0 , countOdd=0 , countZero=0;
  for (var i=0; i<array.length; i++){
      if (array[i]==0) countZero++;
      else if(typeof (array[i])!='number') console.log(`this is not number: ${array[i]}`);
      else if (array[i]%2==0) countEven++;
      else countOdd++;
  }
  console.log(`this is the quantity - ${countEven} - even numbers`)
console.log(`this is the quantity - ${countOdd} - odd numbers`)
console.log(`this is the quantity - ${countZero} - zero`) */

let myMap = ["x","y"];
console.log(myMap.keys("key - x"));
console.log(myMap.values("value - y"));
