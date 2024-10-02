const faturamentoMensal =  {
    "faturamento": [1000, 2000, 0, 1500, 3000, 4000, 0, 2500, 0, 500, 2000, 0, 0, 1500, 3500]
  };
  
  function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);
    
    const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;
    
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia
    };
  }
  

  const resultado = calcularFaturamento(faturamentoMensal.faturamento);
  console.log(`Menor valor de faturamento: R$${resultado.menorValor}`);
  console.log(`Maior valor de faturamento: R$${resultado.maiorValor}`);
  console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
  