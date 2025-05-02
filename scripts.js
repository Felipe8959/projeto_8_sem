function calculate(){
    const distancia   = parseFloat(document.getElementById('distancia').value)   || 0;
    const precoGasolina  = parseFloat(document.getElementById('precoGasolina').value)  || 0;
    const consumo= parseFloat(document.getElementById('consumo').value)|| 1;
    const aluguelDiario  = parseFloat(document.getElementById('aluguelDiario').value)  || 0;
    const dias       = parseInt  (document.getElementById('dias').value)       || 0;
    const taxaUber   = parseFloat(document.getElementById('taxaUber').value)   || 0;

    /* combustível */
    const litrosNecessarios = distancia / consumo;
    const custoGasolina     = litrosNecessarios * precoGasolina;

    /* aluguel */
    const custoAluguel     = aluguelDiario * dias;

    /* total carro próprio + aluguel */
    const custoTotalCarro = custoGasolina + custoAluguel;

    /* Uber/99 (tarifa por km) */
    const custoUber     = distancia * taxaUber;


    /* resultados */
    document.getElementById('custoGasolina').textContent      = `Combustível: R$ ${custoGasolina.toFixed(2)}`;
    document.getElementById('custoAluguel').textContent      = `Aluguel: R$ ${custoAluguel.toFixed(2)}`;
    document.getElementById('custoTotalCarro').textContent  = `Total Carro + Aluguel: R$ ${custoTotalCarro.toFixed(2)}`;
    document.getElementById('custoUber').textContent      = `Uber/99: R$ ${custoUber.toFixed(2)}`;

    document.getElementById('results').classList.remove('hidden');
    showSection('calculator');
}