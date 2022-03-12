let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i}, tem o valor: ${num[i]}`)
}

//maneira simplificada
for (let i in num) {
    console.log(num[i])
}

console.log(`11 aparece na posição: ${num.indexOf(11)}`)