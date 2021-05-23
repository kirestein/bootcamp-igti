var numeros = [];

for (let i = 3; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        numeros.push(i);
    }
    
}

var sum = 0;
for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
    
}

console.log(sum);