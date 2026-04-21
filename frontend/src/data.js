export const mockFiis = [
  {
    ticker: "HGLG11",
    mes: "Dezembro/2025",
    resumo: "Fundo apresentou resultado forte com distribuição estável de R$ 1,10/cota, sustentado por eventos pontuais e aumento de reserva.",
    nao_recorrente: {
      existe: true,
      descricao: "Venda de ativos (R$0,07/cota), lucro de SPE (R$0,04/cota) e indenização (R$0,02/cota)."
    },
    riscos: "Parte relevante do resultado veio de eventos não recorrentes e antecipação de receitas.",
    sustentabilidade: "Média",
    conclusao: "Dividendos sustentados no curto prazo, mas com dependência de eventos pontuais.",

    score_risco: 65,
    alerta: "ATENÇÃO",
    referencia: "Relatório gerencial Dezembro/2025"
  },
  {
    ticker: "PVBI11",
    mes: "Dezembro/2025",
    resumo: "Fundo apresentou resultado de R$0,43/cota e distribuição de R$0,45, com receitas predominantemente recorrentes.",

    nao_recorrente: {
      existe: false,
      descricao: "Não houve impactos não recorrentes no resultado."
    },

    riscos: "Vacância elevada (~16,5%) e projeção de aumento para ~18,8% nos próximos meses.",

    sustentabilidade: "Alta",
    conclusao: "Dividendos sustentáveis no curto prazo, com risco moderado ligado à vacância.",

    score_risco: 40,
    alerta: "ESTÁVEL",
    referencia: "Relatório gerencial Dezembro/2025"
  },
  {
    ticker: "HGLG11",
    mes: "Janeiro/2026",
    resumo: "Resultado caiu para R$0,75/cota, mas distribuição foi mantida em R$1,10, indicando uso de reservas.",
    nao_recorrente: {
      existe: true,
      descricao: "Venda de ativos e efeitos de antecipação de receitas impactaram o resultado."
    },
    riscos: "Distribuição acima do resultado e dependência de eventos não recorrentes.",
    sustentabilidade: "Média",
    conclusao: "Manutenção do dividendo depende de reservas e normalização do resultado.",

    score_risco: 80,
    alerta: "RISCO OCULTO",
    referencia: "Relatório gerencial Janeiro/2026"
  },
  {
    ticker: "PVBI11",
    mes: "Janeiro/2026",
    resumo: "Resultado caiu para R$0,40/cota enquanto a distribuição foi mantida em R$0,45, indicando uso de reserva.",

    nao_recorrente: {
      existe: true,
      descricao: "Resultado impactado por efeito não recorrente ligado à comercialização de novas locações."
    },

    riscos: "Saída do Banco ABC e aumento da vacância projetada para ~24,1%, pressionando receitas futuras.",

    sustentabilidade: "Média",
    conclusao: "Dividendos pressionados, com possibilidade de redução ao longo do semestre.",

    score_risco: 70,
    alerta: "RISCO OCULTO",
    referencia: "Relatório gerencial Janeiro/2026"
  },
  {
    ticker: "HGLG11",
    mes: "Fevereiro/2026",
    resumo: "Resultado voltou para R$1,17/cota, com distribuição estável, mas impulsionado por ganho de capital.",
    nao_recorrente: {
      existe: true,
      descricao: "Venda de cotas de FIIs gerou impacto de R$0,15/cota."
    },
    riscos: "Dependência de reciclagem de portfólio para sustentar resultado.",
    sustentabilidade: "Média",
    conclusao: "Fundo sólido, mas dividendos parcialmente dependentes de eventos não recorrentes.",

    score_risco: 70,
    alerta: "ATENÇÃO",
    referencia: "Relatório gerencial Fevereiro/2026"
  },
  {
    ticker: "PVBI11",
    mes: "Fevereiro/2026",
    resumo: "Resultado de R$0,47/cota com distribuição de R$0,45, porém com impacto pontual de multa de rescisão.",

    nao_recorrente: {
      existe: true,
      descricao: "Multa de rescisão de locatário impactou o resultado em R$0,02/cota."
    },

    riscos: "Vacância pode chegar a ~25,5% e há expectativa de redução do dividendo para ~R$0,40.",

    sustentabilidade: "Média",
    conclusao: "Fundo sólido, mas com tendência de queda nos dividendos devido à vacância crescente.",

    score_risco: 75,
    alerta: "ATENÇÃO",
    referencia: "Relatório gerencial Fevereiro/2026"
  }
].reverse()
