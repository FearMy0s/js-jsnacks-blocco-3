const Numero = Number(prompt("Inserisci un numero"));
let Box = [];
for(let x = 0; x < Numero ; x++){
    Box [x] = [];
    for(let i = 0; i < 10 ; i++){
    Box[x].push(Math.floor(Math.random() * 100));
    }
    console.log(Box[x]);
}
