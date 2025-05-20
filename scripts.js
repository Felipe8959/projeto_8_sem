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
    const distancia     = parseFloat(document.getElementById('distancia').value)    || 0;
    const precoGasolina = parseFloat(document.getElementById('precoGasolina').value)|| 0;
    const consumo       = parseFloat(document.getElementById('consumo').value)     || 1;
    const valorAluguel  = parseFloat(document.getElementById('valorAluguel').value)|| 0;
    const periodo       = document.getElementById('periodoAluguel').value;
    const dias          = parseInt(document.getElementById('dias').value)          || 0;
    const taxaUber      = parseFloat(document.getElementById('taxaUber').value)    || 0;
    const lucroDesejado = parseFloat(document.getElementById('lucroAluguel').value)|| 0;

    // converte valor para diário
    let valorDiario = valorAluguel;
    if (periodo === 'semana') valorDiario /= 7;
    if (periodo === 'mes')    valorDiario /= 30;

    const litrosNec  = distancia / consumo;
    const custoGas   = litrosNec * precoGasolina;
    const custoAlug  = valorDiario * dias;
    const custoTotal = custoGas + custoAlug;
    const custoUber  = distancia * taxaUber;

    // --- tarifa mínima p/ alcançar lucro ---
    const kmMes = dias ? (distancia / dias) * 30 : distancia;
    const tarifaMin = (custoTotal + lucroDesejado) / kmMes;

    document.getElementById('custoGasolina').textContent   = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('custoAluguel').textContent    = `Aluguel: R$ ${custoAlug.toFixed(2)}`;
    document.getElementById('custoTotalCarro').textContent = `Total Carro + Aluguel: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('custoUber').textContent       = `Uber/99: R$ ${custoUber.toFixed(2)}`;
    document.getElementById('tarifaMinAluguel').textContent =
    `Rodando: ${kmMes.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgAlug = `*Carro Alugado*
    Combustível: R$ ${custoGas.toFixed(2)}
    Aluguel: R$ ${custoAlug.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmMes.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waAluguel').href =
    'https://wa.me/?text=' + encodeURIComponent(msgAlug);

    document.getElementById('resultsAluguel').classList.remove('hidden');
}

/* CARRO FINANCIADO */
function calculateFinanciado(){
    const distancia     = parseFloat(document.getElementById('distanciaFin').value)      || 0;
    const precoGasolina = parseFloat(document.getElementById('precoGasolinaFin').value)  || 0;
    const consumo       = parseFloat(document.getElementById('consumoFin').value)        || 1;
    const parcelaMensal = parseFloat(document.getElementById('parcelaMensal').value)     || 0;
    const kmMes         = parseFloat(document.getElementById('kmMes').value)             || 1;
    const lucroDesejado = parseFloat(document.getElementById('lucroFin').value)||0;

    const litrosNec   = distancia/consumo;
    const custoGas    = litrosNec*precoGasolina;
    const custoParc   = parcelaMensal*(distancia/kmMes);
    const custoTotal  = custoGas+custoParc;
    const tarifaMin = (custoTotal + lucroDesejado) / kmMes;

    document.getElementById('custoGasolinaFin').textContent = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('custoParcela').textContent     = `Parcela Proporcional: R$ ${custoParc.toFixed(2)}`;
    document.getElementById('custoTotalFin').textContent = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinFin').textContent  =
    `Rodando: ${kmMes.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgFin = `*Carro Financiado*
    Combustível: R$ ${custoGas.toFixed(2)}
    Parcela: R$ ${custoParc.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmMes.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waFin').href =
    'https://wa.me/?text=' + encodeURIComponent(msgFin);

    document.getElementById('resultsFin').classList.remove('hidden');
}

/* CARRO QUITADO*/
function calculateQuitado(){
    const distancia     = parseFloat(document.getElementById('distanciaQuit').value)      || 0;
    const precoGasolina = parseFloat(document.getElementById('precoGasolinaQuit').value)  || 0;
    const consumo       = parseFloat(document.getElementById('consumoQuit').value)        || 1;
    const manutKm       = parseFloat(document.getElementById('manutencaoKm').value)       || 0;
    const lucroDesejado = parseFloat(document.getElementById('lucroQuit').value)||0;

    const litrosNec   = distancia/consumo;
    const custoGas    = litrosNec*precoGasolina;
    const custoManu   = manutKm*distancia;
    const custoTotal  = custoGas+custoManu;
    const tarifaMin = (custoTotal + lucroDesejado) / distancia;

    document.getElementById('custoGasolinaQuit').textContent = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('custoManutencao').textContent   = `Manutenção: R$ ${custoManu.toFixed(2)}`;
    document.getElementById('custoTotalQuit').textContent    = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinQuit').textContent =
        `Rodando: ${distancia.toFixed(0)} km/mês, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgQuit = `*Carro Quitado*
    Combustível: R$ ${custoGas.toFixed(2)}
    Manutenção: R$ ${custoManu.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${distancia.toFixed(0)} km/mês
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waQuit').href =
    'https://wa.me/?text=' + encodeURIComponent(msgQuit);

    document.getElementById('resultsQuit').classList.remove('hidden');
}

/*  VIAGEM */
function calculateViagem(){
    const distancia     = parseFloat(document.getElementById('distanciaVia').value)      || 0;
    const precoGasolina = parseFloat(document.getElementById('precoGasolinaVia').value)  || 0;
    const consumo       = parseFloat(document.getElementById('consumoVia').value)        || 1;
    const pedagios      = parseFloat(document.getElementById('pedagios').value)          || 0;
    const outrosCustos  = parseFloat(document.getElementById('outrosCustos').value)      || 0;
    const lucroDesejado = parseFloat(document.getElementById('lucroVia').value)||0;

    const litrosNec   = distancia/consumo;
    const custoGas    = litrosNec*precoGasolina;
    const custoExtras = pedagios+outrosCustos;
    const custoTotal  = custoGas+custoExtras;
    const tarifaMin = (custoTotal + lucroDesejado) / distancia;

    document.getElementById('custoGasolinaVia').textContent = `Combustível: R$ ${custoGas.toFixed(2)}`;
    document.getElementById('custoExtras').textContent      = `Extras (Pedágios/Outros): R$ ${custoExtras.toFixed(2)}`;
    document.getElementById('custoTotalVia').textContent    = `Custo Total: R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('tarifaMinVia').textContent =
    `Para ${distancia.toFixed(0)} km, você deve aceitar viagens com tarifa mínima de R$ ${tarifaMin.toFixed(2)} por km!`;

    const msgVia = `*Viagem*
    Combustível: R$ ${custoGas.toFixed(2)}
    Extras: R$ ${custoExtras.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${distancia.toFixed(0)} km
    Tarifa mínima: R$ ${tarifaMin.toFixed(2)}/km`;
    document.getElementById('waVia').href =
    'https://wa.me/?text=' + encodeURIComponent(msgVia);

    document.getElementById('resultsVia').classList.remove('hidden');
}