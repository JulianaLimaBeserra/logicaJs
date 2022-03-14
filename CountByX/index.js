function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n ; i += 1) {
    if (x % i <= n) {
      z.push(x * i);
    }
  }
  return z;
}

console.log(countBy(2, 5));
