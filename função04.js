function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat;
}
console.log(fatorial(5));



// 5! = 5 X 4 X 3 X 2 X 1 = 120