const resultado = document.getElementById('resultado');
const historial = document.getElementById('historial');

function calcular(operador) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (isNaN(num1) || isNaN(num2)) {
    resultado.textContent = ' Ingresa los numeros';
    return;
  }

  let res;
  switch (operador) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado.textContent = ' ERROR';
        return;
      }
      res = num1 / num2;
      break;
  }

  resultado.textContent = res;
  const operacion = `${num1} ${operador} ${num2} = ${res}`;
  const item = document.createElement('div');
  item.textContent = operacion;
  historial.prepend(item);

}

function limpiar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  resultado.textContent = '0';
  historial.innerHTML = '';
}
 
 