var a = [75, 80, 56, 98, 112, 345, 320, 700, 488]

a.forEach(x => {
    if (x % 8 == 0) {
        console.log(x + " is divisible by 8.")
    } else {
        console.log(x + " is not divible by 8.")
    }
});
console.log("\n\n")
for (let i = 0; i < a.length; i++) {
    if (a[i] % 8 == 0) {
        console.log(a[i] + " is divisible by 8.")
    } else {
        console.log(a[i] + " is not divible by 8.")
    }    
}
console.log("\n\n")
var i = 0;
while (i < a.length) {
    if (a[i] % 8 == 0) {
        console.log(a[i] + " is divisible by 8.")
    } else {
        console.log(a[i] + " is not divible by 8.")
    }
    i++
}