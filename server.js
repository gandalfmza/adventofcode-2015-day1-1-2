var fs = require('fs');
let inputsanta = "";
let floor = 0;
fs.readFile('./public/inputsanta.txt', function (err, data) {
  if (err) return console.error(err);
  inputsanta = data.toString();
  for (let i = 0; i < inputsanta.length; i++) {
    inputsanta.charAt(i) === "(" ? floor++ : floor--;
    if(floor === -1) {
        console.log("ground", i+1);
        return;
    }
  }
});