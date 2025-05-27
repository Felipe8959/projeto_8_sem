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
    
    let custoCombustivel = (kmRodado / consumo) * precoCombustivel;
    let custoTotal = aluguel + custoCombustivel;
    let receitaNecessaria = custoTotal + lucroDesejado;
    let precoPorKm = receitaNecessaria / kmRodado;
    let metaDiaria = (kmRodado / diasTrabalhados) * precoPorKm
    
    msgVia = document.getElementById('resultsAluguel').innerHTML = `
        <h3>Resultados:</h3>
        <div class="card">⛽ Tipo de combustível: <span class="resultado-valor">${tipoCombustivel}</span></div>
        <div class="card">⛽ Combustivel total mensal: <span class="resultado-valor">R$ ${custoCombustivel.toFixed(2)}</span></div>
        <div class="card">💸 Gasto total  (aluguel + combustivel): <span class="resultado-valor">R$ ${custoTotal.toFixed(2)}</span></div>
        <div class="card">📈 Sua meta de LUCRO do mês é: <span class="resultado-valor">R$ ${lucroDesejado.toFixed(2)}</span></div>
        <div class="card">🔰 Rodando: <span class="resultado-valor">${kmRodado}</span> km por mês, você deve aceitar corridas com tarifa mínima de: <span class="resultado-valor">R$ ${precoPorKm.toFixed(2)}</span> por quilômetro!</div>
        <div class="card">🏁 Sua meta diária: <span class="resultado-valor">${metaDiaria.toFixed(2)}</span></div>
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
    `;
    //resultados
    const msgVia = `*Aluguel*
    Combustível: R$ ${custoCombustivel.toFixed(2)}
    Total: R$ ${custoTotal.toFixed(2)}
    ${kmRodado.toFixed(0)} km`;

    document.getElementById('waVia').href =
    'https://wa.me/?text=' + encodeURIComponent(msgVia);
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

    `;
    document.getElementById('resultsQuit').style.display = 'block';
}

/*  VIAGEM */
function calcularCustoViagem(distanciaKm, consumoKmPorLitro, precoCombustivel, tarifas) {
  const custo = ((distanciaKm / consumoKmPorLitro) * precoCombustivel) + tarifas;
  return custo;
}

function calcular() {
  const distancia = parseFloat(document.getElementById("kmRodadosVia").value);
  const consumo = parseFloat(document.getElementById("consumoVia").value);
  const preco = parseFloat(document.getElementById("precoCombustivelVia").value);
  const tipoCombustivel = document.getElementById('tipoCombustivelVia').value;
  const tarifas = parseFloat(document.getElementById('tarifasVia').value);

  console.log(tarifas)

  if (isNaN(distancia) || isNaN(consumo) || isNaN(preco) || consumo === 0 || isNaN(tarifas)) {
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
  `;
  document.getElementById('resultsVia').style.display = 'block';
}

function enviarResultado() {
    let tipoCombustivel = document.querySelector(".card:nth-child(1) .resultado-valor").innerText;
    let combustivelMensal = document.querySelector(".card:nth-child(2) .resultado-valor").innerText;
    let gastoTotalMensal = document.querySelector(".card:nth-child(3) .resultado-valor").innerText;
    let lucroDesejado = document.querySelector(".card:nth-child(4) .resultado-valor").innerText;
    let kmRodado = document.querySelector(".card:nth-child(5) .resultado-valor").innerText;
    let precoPorKm = document.querySelector(".card:nth-child(5) .resultado-valor:last-child").innerText;
    let meta = document.querySelector(".card:nth-child(6) .resultado-valor:last-child").innerText;
    
    let mensagem = `>📲 *Resultado do Cálculo:* \n\n` +
                   `⛽ Tipo de combustível: *${tipoCombustivel}*\n` +
                   `⛽ Combustível mensal: *${combustivelMensal}*\n` +
                   `💸 Gasto total mensal: *${gastoTotalMensal}*\n` +
                   `📈 Lucro desejado: *${lucroDesejado}*\n` +
                   `📍 Km rodados: *${kmRodado}*\n` +
                   `📍 Meta Diaria: *${meta}*\n` +
                   `>💰 Aceitar corridas com tarifa mínima de: *${precoPorKm}* ✅ por quilômetro!\n\n\n`+
                   `Ⓜ️ Calculo feito por KM-MX`;
    
    let url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
}

function fecharResultado() {
    document.getElementById('resultado-container').style.display = 'none';
}