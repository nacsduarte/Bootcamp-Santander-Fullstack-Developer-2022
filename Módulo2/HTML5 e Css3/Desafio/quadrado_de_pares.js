let N = parseInt(gets())
let pares = []

for (let i = 0; i <N; i++) {
    let num = parseInt(get());

    num % 2 === 0 ? pares.push(num)
}

pares.sort(() => i*i)


for (e of [...pares]){
    console.log(e)
}