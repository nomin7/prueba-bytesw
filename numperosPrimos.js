// NUMEROS PRIMOS EN EL RANGO DE 1 A 10
function numerosPrimos(n){
    for (let i = 2; i < n; i++) {
        if (esPrimo(i)) {
            primos.push(i)
        }
    }
}
function esPrimo(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
           return false;
        }
    }
    return true;
}
var primos = []
numerosPrimos(10);
console.log(primos);