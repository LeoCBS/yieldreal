const meses = {
  "Janeiro": 0,
  "Fevereiro": 1,
  "Março": 2,
  "Abril": 3,
  "Maio": 4,
  "Junho": 5,
  "Julho": 6,
  "Agosto": 7,
  "Setembro": 8,
  "Outubro": 9,
  "Novembro": 10,
  "Dezembro": 11,
};

function parseMesAno(mesStr) {
  const [mesNome, ano] = mesStr.split("/");
  return new Date(Number(ano), meses[mesNome]);
}

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
  },
  {
    ticker: "HGRE11",
    mes: "Janeiro/2026",
    resumo: "Fundo apresentou resultado de R$0,75/cota com distribuição de R$0,85, indicando uso de receitas não recorrentes para sustentar o dividendo.",

    nao_recorrente: {
      existe: true,
      descricao: "Resultado impactado pelo vencimento de ativos mobiliários (R$0,25/cota)."
    },

    riscos: "Distribuição acima do resultado recorrente e presença relevante de receitas extraordinárias.",

    sustentabilidade: "Média",
    conclusao: "Dividendos parcialmente sustentados por eventos não recorrentes, exigindo atenção.",

    score_risco: 75,
    alerta: "RISCO OCULTO",
    referencia: "Relatório gerencial Janeiro/2026"
  },

  {
    ticker: "HGRE11",
    mes: "Fevereiro/2026",
    resumo: "Resultado subiu para R$1,06/cota com distribuição mantida em R$0,85, impulsionado por vendas de ativos e ganhos extraordinários.",

    nao_recorrente: {
      existe: true,
      descricao: "Venda do Vivo Curitiba (R$0,33/cota) e lucro na venda de FIIs (R$0,11/cota)."
    },

    riscos: "Resultado elevado por ganhos não recorrentes e revisão contratual relevante com impacto negativo no aluguel futuro.",

    sustentabilidade: "Média",
    conclusao: "Resultado elevado não reflete recorrência plena; dividendos parecem sustentáveis no curto prazo, mas com distorções.",

    score_risco: 70,
    alerta: "ATENÇÃO",
    referencia: "Relatório gerencial Fevereiro/2026"
  },
  {
    ticker: "HGRE11",
    mes: "Março/2026",
    resumo: "Resultado forte de R$1,44/cota, com distribuição estável em R$0,85, sustentado por ganho relevante na venda de ativo.",

    nao_recorrente: {
      existe: true,
      descricao: "Recebimento da última parcela da venda do Faria Lima (R$0,63/cota)."
    },

    riscos: "Alta dependência de ganhos de capital para sustentar o resultado e possível distorção na percepção do yield.",

    sustentabilidade: "Média",
    conclusao: "Fundo sólido, mas resultado recente inflado por eventos não recorrentes; atenção à normalização futura.",

    score_risco: 78,
    alerta: "RISCO OCULTO",
    referencia: "Relatório gerencial Março/2026"
  }
]

mockFiis.sort((a, b) => parseMesAno(b.mes) - parseMesAno(a.mes));
