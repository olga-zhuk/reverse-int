module.exports = function reverse (n) {
  if (n < 0) { n=n*(-1)}
    let c=n % 10;
    let b=((n - c) % 100) / 10;
    let a=(n - 10 * b - c) / 100;
       if (c === 0) { var numrev = b*10+a }
         else {numrev = c*100+b*10+a};
  return numrev;
}
