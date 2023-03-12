function sum(N) {

  let total = 0
  for (var i = 1; i <= N; i++) {
    total += i
  }
  return total
}


console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120