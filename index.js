const greeting = [];
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, message) {
  for (let i = 0; i < names.length; i++) {
    greeting.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    console.log(greeting);
  }

  return greeting;
}

let num = 0;

function countDown(num){
    while (num >= 0) {
        console.log(num--);
      }

}

countDown(10);