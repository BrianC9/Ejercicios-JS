
let arr = [1, 0, 1, 0, 1000];
let resultado = arr[1] * arr[0]

for (let i = 1; i < arr.length; i++) {
    if ((arr[i] * arr[i - 1]) > resultado) {
        resultado = (arr[i] * arr[i - 1])
    }
    console.log(resultado);


}
console.log(resultado)