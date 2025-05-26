// entre seções
function selectOption(sectionId){
  // oculta
  document.getElementById('selection').classList.add('hidden');
  // exibe navbar
  document.getElementById('topNav').classList.remove('hidden');
  document.getElementById('mainHeader').classList.remove('hidden');
  // exib seção selecionada
  showSection(sectionId);
}

function showSection(sectionId){
  document.querySelectorAll('section.calc').forEach(sec=>sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function goHome(){
  // oculta calculadoras e nav bar
  document.querySelectorAll('section.calc').forEach(sec=>sec.classList.add('hidden'));
  document.getElementById('topNav').classList.add('hidden');
  // exibe tela de seleção
  document.getElementById('selection').classList.remove('hidden');
  document.getElementById('mainHeader').classList.add('hidden');
}

/* CARRO ALUGADO */
function calculateAluguel(){
    const kmRodados     = parseFloat(document.getElementById('kmRodados').value)    || 0;
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value)|| 0;
    const consumo       = parseFloat(document.getElementById('consumo').value)     || 1;
    const valorAluguel  = parseFloat(document.getElementById('valorAluguel').value)|| 0;
    // const periodo       = document.getElementById('periodoAluguel').value;
    // const dias          = parseInt(document.getElementById('dias').value)          || 0;
    // const taxaUber      = parseFloat(document.getElementById('taxaUber').value)    || 0;
    const lucroDesejado = parseFloat(document.getElementById('lucroAluguel').value)|| 0;

    // converte valor para diário
    // let valorDiario = valorAluguel;
    // if (periodo === 'semana') valorDiario /= 7;
    // if (periodo === 'mes')    valorDiario /= 30;

    /*trecho tipo combustivel*/
    
    

    const litrosNec  = kmRodados / consumo;
    const custoGas   = litrosNec * precoCombustivel;
    // const custoAlug  = valorDiario * dias;
    const custoTotal = custoGas + valorAluguel;
    // const custoUber  = kmRodados * taxaUber;

    // --- tarifa mínima p/ alcançar lucro ---
    const kmMes = kmRodados;
    const tarifaMin = (custoTotal + lucroDesejado) / kmMes;

    document.getElementById('custoCombustivel').textContent   = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('valorAluguel').textContent    = `Aluguel: R$ ${valorAluguel.toFixed(2)}`;
    document.getElementById('custoTotalCarro').textContent = `Total Carro + Aluguel: R$ ${custoTotal.toFixed(2)}`;
    // document.getElementById('custoUber').textContent       = `Uber/99: R$ ${custoUber.toFixed(2)}`;
    document.getElementById('tarifaMinAluguel').textContent =
    `Rodando: ${kmMes.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgAlug = `*Carro Alugado*
    Combustível: R$ ${custoGas.toFixed(2)}
    Aluguel: R$ ${valorAluguel.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmMes.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waAluguel').href =
    'https://wa.me/?text=' + encodeURIComponent(msgAlug);

    document.getElementById('resultsAluguel').classList.remove('hidden');
}

/* CARRO FINANCIADO */
function calculateFinanciado(){
    const kmRodados     = parseFloat(document.getElementById('kmRodados').value)      || 0;
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivelFin').value)  || 0;
    const consumo       = parseFloat(document.getElementById('consumoFin').value)        || 1;
    const parcelaMensal = parseFloat(document.getElementById('parcelaMensal').value)     || 0;
    // const kmMes         = parseFloat(document.getElementById('kmMes').value)             || 1;
    const lucroDesejado = parseFloat(document.getElementById('lucroFin').value)||0;
    // const manutPrev     = parseFloat(document.getElementById('manutPrev').value)       || 0;


    const litrosNec   = kmRodados/consumo;
    const custoGas    = litrosNec*precoCombustivel;
    const custoParc   = parcelaMensal;
    const custoTotal  = custoGas+custoParc;
    const tarifaMin = (custoTotal + lucroDesejado) / kmRodados;

    document.getElementById('custoCombustivelFin').textContent = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('custoParcela').textContent     = `Parcela Proporcional: R$ ${custoParc.toFixed(2)}`;
    document.getElementById('custoTotalFin').textContent = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinFin').textContent  =
    `Rodando: ${kmRodados.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgFin = `*Carro Financiado*
    Combustível: R$ ${custoGas.toFixed(2)}
    Parcela: R$ ${custoParc.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmRodados.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waFin').href =
    'https://wa.me/?text=' + encodeURIComponent(msgFin);

    document.getElementById('resultsFin').classList.remove('hidden');
}

/* CARRO QUITADO*/
function calculateQuitado(){
    const kmRodados     = parseFloat(document.getElementById('kmRodados').value)      || 0;
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivelQuit').value)  || 0;
    const consumo       = parseFloat(document.getElementById('consumoQuit').value)        || 1;
    // const manutKm       = parseFloat(document.getElementById('manutencaoKm').value)       || 0;
    const lucroDesejado = parseFloat(document.getElementById('lucroQuit').value)||0;
    // const manutPrev     = parseFloat(document.getElementById('manutPrev').value)       || 0;

    const litrosNec   = kmRodados/consumo;
    const custoGas    = litrosNec*precoCombustivel;
    // const custoManu   = manutKm*kmRodados;
    const custoTotal  = custoGas;
    const tarifaMin = (custoTotal + lucroDesejado) / kmRodados;
    // const custoManuPrev = manutPrev*kmRodados

    document.getElementById('precoCombustivelQuit').textContent = `Combustível: R$ ${custoGas.toFixed(2)}`;
    // document.getElementById('custoManutencao').textContent   = `Manutenção: R$ ${custoManu.toFixed(2)}`;
    document.getElementById('custoTotalQuit').textContent    = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinQuit').textContent =
        `Rodando: ${kmRodados.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    // Manutenção: R$ ${custoManu.toFixed(2)}    
    const msgQuit = `*Carro Quitado*
    Combustível: R$ ${custoGas.toFixed(2)}
    
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmRodados.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;

    document.getElementById('waQuit').href =
    'https://wa.me/?text=' + encodeURIComponent(msgQuit);

    document.getElementById('resultsQuit').classList.remove('hidden');
}

/*  VIAGEM */
function calculateViagem(){
    const kmRodados         = parseFloat(document.getElementById('kmRodados').value)            || 0;
    const precoCombustivel  = parseFloat(document.getElementById('precoCombustivelVia').value)  || 0;
    const consumo           = parseFloat(document.getElementById('consumoVia').value)           || 1;
    // const pedagios      = parseFloat(document.getElementById('pedagios').value)          || 0;
    // const outrosCustos  = parseFloat(document.getElementById('outrosCustos').value)      || 0;
    const lucroDesejado     = parseFloat(document.getElementById('lucroVia').value)             ||0;


    const litrosNec     = kmRodados/consumo;
    const custoGas      = litrosNec*precoCombustivel;
    // const custoExtras = pedagios+outrosCustos;
    const custoTotal    = custoGas;
    // const tarifaMin = (custoTotal + lucroDesejado) / kmRodados;
    const tarifaMin     = kmRodados > 0 ? (custoTotal + lucroDesejado) / kmRodados : 0;


    document.getElementById('custoCombustivelVia').textContent  = `Combustível: R$ ${custoGas.toFixed(2)}`;
    // document.getElementById('custoExtras').textContent          = `Extras (Pedágios/Outros): R$ ${custoExtras.toFixed(2)}`;
    document.getElementById('custoTotalVia').textContent        = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinVia').textContent =
    `Para ${kmRodados.toFixed(0)} km, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;
    // Extras: R$ ${custoExtras.toFixed(2)}

    //resultados
    const msgVia = `*Viagem*
    Combustível: R$ ${custoGas.toFixed(2)} (${litrosNec.toFixed(1)}L
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmRodados.toFixed(0)} km
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;

    document.getElementById('waVia').href =
    'https://wa.me/?text=' + encodeURIComponent(msgVia);

    document.getElementById('resultsVia').classList.remove('hidden');
}