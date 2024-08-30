const texto = "Aqui um exemplo para verificar as letras 'a'"

function contarLetraA(str) {

  const textoMinusculo = str.toLowerCase()

 
  const quantidade = textoMinusculo.split('a').length - 1

  return quantidade
}

const resultado = contarLetraA(texto)

console.log(`A letra 'a' aparece ${resultado} vezes.`)
