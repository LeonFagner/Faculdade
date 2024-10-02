
const num = 13; 

function isFibonacci(num) {
    let a = 0, b = 1;
    
    while (b <= num) {
      if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      }
      [a, b] = [b, a + b];
    }
    
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
  
  
 
  console.log(isFibonacci(num));
  