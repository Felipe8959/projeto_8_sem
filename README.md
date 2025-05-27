# KM-MX – Calculadora de Quilometragem para Motoristas

**KM-MX** é uma aplicação web que ajuda motoristas de aplicativos ou particulares a descobrir rapidamente o custo por quilômetro e a tarifa mínima que precisam cobrar para atingir uma meta de lucro em quatro cenários diferentes (aluguel, financiamento, carro quitado e viagens). A ferramenta também gera um resumo formatado e pronto para ser compartilhado no WhatsApp.

---

## ✨ Funcionalidades

- **Quatro calculadoras independentes**:  
  `Carro Alugado`, `Carro Financiado`, `Carro Quitado` e `Viagem de Carro`, cada uma com seus próprios campos e lógica de cálculo.
- **Formato de moeda e números**: entrada de valores com máscara `R$` e vírgula como separador decimal.
- **Meta diária e por quilômetro**: exibe automaticamente a tarifa mínima e a meta de faturamento por dia.
- **Botão “Enviar via WhatsApp”**: copia todos os resultados em formato de lista para o WhatsApp com um clique.
- **Interface responsiva**: grade CSS e design fluido que funcionam bem em telas de celular, tablets e desktop.
- **Navegação simplificada**: tela inicial com ícones, barra de navegação superior e botão de retorno à tela principal.

---

## 🛠️ Tecnologias e Bibliotecas

| Camada | Tecnologias Utilizadas |
| ------ | ---------------------- |
| **Frontend** | HTML5 semântico, CSS3 (Flexbox + Grid), JavaScript ES6 |
| **Ícones** | [Font Awesome 6](https://fontawesome.com) |
| **Fonte** | Google Fonts — Inter |
| **Compartilhamento** | API Web `window.open` para WhatsApp |

---

## 📁 Estrutura do Projeto

```text
km-mx/
├── index.html      # Estrutura e navegação principais
├── styles.css      # Estilos, responsividade, animações
├── scripts.js      # Lógica dos cálculos, formatação e interações
├── images/         # Logos, ícones customizados, capturas de tela
└── README.md
