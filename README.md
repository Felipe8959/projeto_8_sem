# Calculadora de Custos

Este é um projeto de uma **Calculadora de Custos** desenvolvida em HTML, CSS e JavaScript. A aplicação permite calcular os custos de uma viagem considerando diferentes fatores, como distância, preço da gasolina, consumo do carro, aluguel diário e tarifas de aplicativos de transporte como Uber/99.

## 📋 Funcionalidades

- **Cálculo de custos com gasolina**: Baseado na distância, preço da gasolina e consumo do carro.
- **Cálculo de custos com aluguel de carro**: Considerando o valor diário do aluguel e o número de dias.
- **Cálculo de custos com aplicativos de transporte**: Baseado na tarifa por quilômetro.
- Exibição dos resultados de forma clara e organizada.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e animações.
- **JavaScript**: Lógica para os cálculos.

## 📐 Fórmulas Utilizadas

1. **Custo com Gasolina**  
   `Custo Gasolina = (Distância em km / Consumo em km/L) × Preço da Gasolina (R$/L)`

2. **Custo com Aluguel de Carro**  
   `Custo Aluguel = Aluguel Diário (R$/dia) × Dias de Aluguel`

3. **Custo Total com Carro**  
   `Custo Total Carro = Custo Gasolina + Custo Aluguel`

4. **Custo com Aplicativos de Transporte (Uber/99)**  
   `Custo Uber = Distância em km × Tarifa Uber/99 (R$/km)`

## 📂 Estrutura do Projeto

```plaintext
projeto_8sem/
├── index.html       # Arquivo principal da aplicação
├── styles.css       # Estilos e animações
├── scripts.js       # Lógica dos cálculos
├── images/          # Ícone
└── README.md        # Documentação do projeto
```