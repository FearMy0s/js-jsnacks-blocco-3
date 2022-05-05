let Somma = 0;
let box = [];
do{
     let Numero = Number(prompt("Inserisci un numero"));
     Somma = Somma + Numero;
     if(Somma <= 50){
     box.push(Somma)
     }
    }
    while(Somma <= 50)
    console.log(box)