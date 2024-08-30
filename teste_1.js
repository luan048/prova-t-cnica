function isFibonacci(num) {
    let a = 0
    let b = 1
  
    if (num === 0 || num === 1) {
      return true
    }
  
    while (b < num) {
      const temp = b
      b = a + b
      a = temp
    }
  
    return b === num
  }
  
const numero = 22
  
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`)
} 
  
else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`)
}  