// var kodeUnixRandom = [12,78,42,40,36,2,8,96,66,20,91,85,41,69,38,77,97,60,15,57];
// let newKodeUnix = kodeUnixRandom.reduce((accumulator, currentValue) => accumulator + currentValue)
// let hasil = (newKodeUnix / kodeUnixRandom.length)

// console.log(hasil);

var kodeUnixRandom = [12,78,42,40,36,2,8,96,66,20,91,85,41,69,38,77,97,60,15,57];
let newKodeUnix = kodeUnixRandom.reduce((a,b) => (a + b) / kodeUnixRandom.length )
console.log(newKodeUnix);