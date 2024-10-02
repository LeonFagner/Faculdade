const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  function calcularPercentual(faturamento) {
    const totalMensal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    for (const [estado, valor] of Object.entries(faturamento)) {
      const percentual = (valor / totalMensal) * 100;
      console.log(`O estado ${estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
    }
  }
  
  calcularPercentual(faturamentoEstados);
  