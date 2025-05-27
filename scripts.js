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
function formatarMoeda(campo) {
    let valor = campo.value.replace(/\D/g, ""); // Remove tudo que não for número
    valor = (valor / 100).toFixed(2) + ""; // Divide por 100 para obter decimal
    valor = valor.replace(".", ","); // Substitui ponto por vírgula
    campo.value = "R$ " + valor; // Adiciona o prefixo "R$ "
}

function formatarNumero(valor) {
    return parseFloat(valor.replace("R$ ", "").replace(".", "").replace(",", ".")) || 0;
}

function calculateAluguel() {
    let aluguel = formatarNumero(document.getElementById('valorAluguel').value);
    let kmRodado = formatarNumero(document.getElementById('kmRodadosAlug').value);
    let tipoCombustivel = document.getElementById('tipoCombustivelAlug').value;
    let precoCombustivel = formatarNumero(document.getElementById('precoCombustivel').value);
    let consumo = formatarNumero(document.getElementById('consumo').value);
    let lucroDesejado = formatarNumero(document.getElementById('lucroAluguel').value);
    let diasTrabalhados = formatarNumero(document.getElementById('diasTrabalhados').value);

    if (
      isNaN(aluguel) || isNaN(kmRodado) || tipoCombustivel === "" ||
      isNaN(precoCombustivel) || isNaN(consumo) ||
      isNaN(lucroDesejado) || isNaN(diasTrabalhados) || consumo === 0 || diasTrabalhados === 0
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    let custoCombustivel = (kmRodado / consumo) * precoCombustivel;
    let custoTotal = aluguel + custoCombustivel;
    let receitaNecessaria = custoTotal + lucroDesejado;
    let precoPorKm = receitaNecessaria / kmRodado;
    let metaDiaria = (kmRodado / diasTrabalhados) * precoPorKm
    
    document.getElementById('resultsAluguel').innerHTML = `
        <h3>Resultados:</h3>
        <div class="card">⛽ Tipo de combustível: <span class="resultado-valor">${tipoCombustivel}</span></div>
        <div class="card">⛽ Combustivel total mensal: <span class="resultado-valor">R$ ${custoCombustivel.toFixed(2)}</span></div>
        <div class="card">💸 Gasto total  (aluguel + combustivel): <span class="resultado-valor">R$ ${custoTotal.toFixed(2)}</span></div>
        <div class="card">📈 Sua meta de LUCRO do mês é: <span class="resultado-valor">R$ ${lucroDesejado.toFixed(2)}</span></div>
        <div class="card">🔰 Rodando: <span class="resultado-valor">${kmRodado}</span> km por mês, você deve aceitar corridas com tarifa mínima de: <span class="resultado-valor">R$ ${precoPorKm.toFixed(2)}</span> por quilômetro!</div>
        <div class="card">🏁 Sua meta diária: <span class="resultado-valor">${metaDiaria.toFixed(2)}</span></div>
        <button class="btn_wa"
                onclick="enviarWhatsApp('resultsAluguel')">
          📲 Enviar via WhatsApp
        </button>
        <button class="btn_close"
                onclick="fecharResultados('resultsAluguel')">❌</button>
    `;

    document.getElementById('resultsAluguel').style.display = 'block';
}

/* CARRO FINANCIADO */
function calculateFinanc() {
    let financ = formatarNumero(document.getElementById('valorFinanc').value);
    let kmRodado = formatarNumero(document.getElementById('kmRodadosFinanc').value);
    let tipoCombustivel = document.getElementById('tipoCombustivelFinanc').value;
    let precoCombustivel = formatarNumero(document.getElementById('precoCombustivelFinanc').value);
    let consumo = formatarNumero(document.getElementById('consumoFinanc').value);
    let lucroDesejado = formatarNumero(document.getElementById('lucroFinanc').value);
    let diasTrabalhados = formatarNumero(document.getElementById('diasTrabalhadosFinan').value);

    if (
      isNaN(financ) || isNaN(kmRodado) || tipoCombustivel === "" ||
      isNaN(precoCombustivel) || isNaN(consumo) ||
      isNaN(lucroDesejado) || isNaN(diasTrabalhados) || consumo === 0 || diasTrabalhados === 0
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    let custoCombustivel = (kmRodado / consumo) * precoCombustivel;
    let custoTotal = financ + custoCombustivel;
    let receitaNecessaria = custoTotal + lucroDesejado;
    let precoPorKm = receitaNecessaria / kmRodado;
    let metaDiaria = (kmRodado / diasTrabalhados) * precoPorKm
    
    document.getElementById('resultsFinanc').innerHTML = `
        <h3>Resultados:</h3>
        <div class="card">⛽ Tipo de combustível: <span class="resultado-valor">${tipoCombustivel}</span></div>
        <div class="card">⛽ Combustivel total mensal: <span class="resultado-valor">R$ ${custoCombustivel.toFixed(2)}</span></div>
        <div class="card">💸 Gasto total  (Financiamento + combustivel): <span class="resultado-valor">R$ ${custoTotal.toFixed(2)}</span></div>
        <div class="card">📈 Sua meta de LUCRO do mês é: <span class="resultado-valor">R$ ${lucroDesejado.toFixed(2)}</span></div>
        <div class="card">🔰 Rodando: <span class="resultado-valor">${kmRodado}</span> km por mês, você deve aceitar corridas com tarifa mínima de: <span class="resultado-valor">R$ ${precoPorKm.toFixed(2)}</span> por quilômetro!</div>
        <div class="card">🏁 Sua meta diária: <span class="resultado-valor">${metaDiaria.toFixed(2)}</span></div>
        <button class="btn_wa"
                onclick="enviarWhatsApp('resultsFinanc')">
          📲 Enviar via WhatsApp
        </button>
        <button class="btn_close"
                onclick="fecharResultados('resultsFinanc')">❌</button>
    `;

    document.getElementById('resultsFinanc').style.display = 'block';
}

/* CARRO QUITADO*/
function calculateQuitado(){
    let kmRodado = formatarNumero(document.getElementById('kmRodadosQuit').value);
    let tipoCombustivel = document.getElementById('tipoCombustivelQuit').value;
    let precoCombustivel = formatarNumero(document.getElementById('precoCombustivelQuit').value);
    let consumo = formatarNumero(document.getElementById('consumoQuit').value);
    let lucroDesejado = formatarNumero(document.getElementById('lucroQuit').value);
    let diasTrabalhados = formatarNumero(document.getElementById('diasTrabalhadosQuit').value);

    if (isNaN(kmRodado) || !tipoCombustivel || isNaN(precoCombustivel) || isNaN(consumo) || isNaN(diasTrabalhados) || isNaN(lucroDesejado)) {
      alert("Preencha todos os campos.");
      return;
    }

    let custoCombustivel = (kmRodado / consumo) * precoCombustivel;
    let custoTotal = custoCombustivel;
    let receitaNecessaria = custoTotal + lucroDesejado;
    let precoPorKm = receitaNecessaria / kmRodado;
    let metaDiaria = (kmRodado / diasTrabalhados) * precoPorKm
    
    document.getElementById('resultsQuit').innerHTML = `
        <h3>Resultados:</h3>
        <div class="card">⛽ Tipo de combustível: <span class="resultado-valor">${tipoCombustivel}</span></div>
        <div class="card">⛽ Combustivel total mensal: <span class="resultado-valor">R$ ${custoCombustivel.toFixed(2)}</span></div>
        <div class="card">💸 Gasto total: <span class="resultado-valor">R$ ${custoTotal.toFixed(2)}</span></div>
        <div class="card">📈 Sua meta de LUCRO do mês é: <span class="resultado-valor">R$ ${lucroDesejado.toFixed(2)}</span></div>
        <div class="card">🔰 Rodando: <span class="resultado-valor">${kmRodado}</span> km por mês, você deve aceitar corridas com tarifa mínima de: <span class="resultado-valor">R$ ${precoPorKm.toFixed(2)}</span> por quilômetro!</div>
        <div class="card">🏁 Sua meta diária: <span class="resultado-valor">${metaDiaria.toFixed(2)}</span></div>
        <button class="btn_wa"
                onclick="enviarWhatsApp('resultsQuit')">
          📲 Enviar via WhatsApp
        </button>
        <button class="btn_close"
                onclick="fecharResultados('resultsQuit')">❌</button>
    `;
    document.getElementById('resultsQuit').style.display = 'block';
}

/*  VIAGEM */
function calcularCustoViagem(distanciaKm, consumoKmPorLitro, precoCombustivel, tarifas) {
  const custo = ((distanciaKm / consumoKmPorLitro) * precoCombustivel) + tarifas;
  return custo;
}

function calcular() {
  const distancia = formatarNumero(document.getElementById("kmRodadosVia").value);
  const consumo = formatarNumero(document.getElementById("consumoVia").value);
  const preco = formatarNumero(document.getElementById("precoCombustivelVia").value);
  const tipoCombustivel = document.getElementById('tipoCombustivelVia').value;
  const tarifas = formatarNumero(document.getElementById('tarifasVia').value);

  if (isNaN(distancia) || isNaN(consumo) || isNaN(preco) || !tipoCombustivel || isNaN(tarifas)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const custoCombustivel = (distancia / consumo) * preco;
  const resultado = calcularCustoViagem(distancia, consumo, preco, tarifas);
  document.getElementById("resultsVia").textContent = `Custo estimado da viagem: ${resultado}`;

  document.getElementById('resultsVia').innerHTML = `
      <h3>Resultados:</h3>
      <div class="card">⛽ Tipo de combustível: <span class="resultado-valor">${tipoCombustivel}</span></div>
      <div class="card">⛽ Combustivel total mensal: <span class="resultado-valor">R$ ${custoCombustivel.toFixed(2)}</span></div>
      <div class="card">💸 Gasto com pedágios: <span class="resultado-valor">R$ ${tarifas.toFixed(2)}</span></div>
      <div class="card">💸 Gasto total: <span class="resultado-valor">R$ ${resultado.toFixed(2)}</span></div>
      <button class="btn_wa"
              onclick="enviarWhatsApp('resultsVia')">
        📲 Enviar via WhatsApp
      </button>
      <button class="btn_close"
              onclick="fecharResultados('resultsVia')">❌</button>
  `;
  document.getElementById('resultsVia').style.display = 'block';
}

function enviarWhatsApp(containerId) {
  const container = document.getElementById(containerId);

  const cards = container.querySelectorAll('.card');
  let texto = '*Resultados:*\n';
  

  cards.forEach(card => {
    const linha = card.innerText
      .trim()
      .replace(/[\u231A-\uFE0F\u2600-\u27BF\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '- '); // substitui emoji por '- '
    texto += linha + '\n';
  });

  window.open(
    `https://wa.me/?text=${encodeURIComponent(texto.trim())}`,
    '_blank'
  );
}

function fecharResultados(containerId){
  document.getElementById(containerId).style.display = 'none';
}