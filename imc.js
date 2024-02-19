function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const imc = peso / (altura * altura);
  const resultado = imc;
  let resultadoverbalimc = '';
  if (resultado < 16.9) {
    resultadoverbalimc = 'Muito abaixo do peso';
  } else if (resultado >= 17 && resultado <= 18.4) {
    resultadoverbalimc = 'abaixo do peso';
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    resultadoverbalimc = 'peso normal';
  } else if (resultado >= 25 && resultado <= 29.9) {
    resultadoverbalimc = 'acima do peso';
  } else if (resultado >= 30 && resultado <= 34.9) {
    resultadoverbalimc = 'Obesidade grau I';
  } else if (resultado >= 35 && resultado <= 40) {
    resultadoverbalimc = 'Obesidade grau II';
  } else if (resultado > 40) {
    resultadoverbalimc = 'Obesidade grau III';
  }
  document.getElementById('resultado').innerHTML = `resultado imc : ${resultado.toFixed(2)} <br>classificação : ${resultadoverbalimc}
`;
}
