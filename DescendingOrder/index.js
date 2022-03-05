function descendingOrder(n) {
  return parseInt( n.toString().split("").sort().reverse().join(""));
}

const numeros = descendingOrder(42145);
console.log(numeros);
