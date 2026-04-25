export const mockFiis = [
  {
    ticker: "HGLG11",
    score_medio: 72,
    sustentabilidade: "Média",
    tipo_risco: "Reciclagem / Ganhos de Capital",
    resumo_padrao:
      "Fundo com geração de renda majoritariamente recorrente, mas com impacto pontual de eventos não recorrentes nos últimos meses.",

    historico: [
      {
        mes: "Dez/2025",
        resumo:
          "Resultado forte com distribuição estável, sustentado por eventos pontuais.",
        score_risco: 65,
        alerta: "ATENÇÃO",
        nao_recorrente:
          "Venda de ativos, lucro de SPE e indenizações impactaram o resultado.",
        referencia: "Relatório gerencial Dezembro/2025"
      },
      {
        mes: "Jan/2026",
        resumo:
          "Distribuição acima do resultado, indicando uso de reservas.",
        score_risco: 80,
        alerta: "RISCO OCULTO",
        nao_recorrente:
          "Venda de ativos e antecipação de receitas.",
        referencia: "Relatório gerencial Janeiro/2026"
      },
      {
        mes: "Fev/2026",
        resumo:
          "Resultado elevado impulsionado por ganho de capital.",
        score_risco: 70,
        alerta: "ATENÇÃO",
        nao_recorrente:
          "Venda de cotas de FIIs impactou o resultado.",
        referencia: "Relatório gerencial Fevereiro/2026"
      }
    ]
  },

  {
    ticker: "PVBI11",
    score_medio: 62,
    sustentabilidade: "Média",
    tipo_risco: "Vacância / Receita Futura",
    resumo_padrao:
      "Renda recorrente, porém com pressão de vacância e tendência de queda nos dividendos.",

    historico: [
      {
        mes: "Dez/2025",
        resumo:
          "Receita majoritariamente recorrente e distribuição sustentável.",
        score_risco: 40,
        alerta: "ESTÁVEL",
        nao_recorrente: "Não identificado.",
        referencia: "Relatório gerencial Dezembro/2025"
      },
      {
        mes: "Jan/2026",
        resumo:
          "Resultado abaixo da distribuição, com aumento da vacância.",
        score_risco: 70,
        alerta: "RISCO OCULTO",
        nao_recorrente:
          "Impacto pontual na comercialização de locações.",
        referencia: "Relatório gerencial Janeiro/2026"
      },
      {
        mes: "Fev/2026",
        resumo:
          "Resultado impactado por multa, mas com aumento da vacância.",
        score_risco: 75,
        alerta: "ATENÇÃO",
        nao_recorrente:
          "Multa de rescisão de locatário.",
        referencia: "Relatório gerencial Fevereiro/2026"
      }
    ]
  },

  {
    ticker: "HGRE11",
    score_medio: 74,
    sustentabilidade: "Média",
    tipo_risco: "Reciclagem / Ganhos Não Recorrentes",
    resumo_padrao:
      "Dividendos estáveis, mas fortemente influenciados por ganhos de capital e reciclagem de portfólio.",

    historico: [
      {
        mes: "Jan/2026",
        resumo:
          "Resultado abaixo da distribuição, com uso de receitas não recorrentes.",
        score_risco: 75,
        alerta: "RISCO OCULTO",
        nao_recorrente:
          "Vencimento de ativos mobiliários impactou o resultado.",
        referencia: "Relatório gerencial Janeiro/2026"
      },
      {
        mes: "Fev/2026",
        resumo:
          "Resultado elevado impulsionado por venda de ativos.",
        score_risco: 70,
        alerta: "ATENÇÃO",
        nao_recorrente:
          "Venda do Vivo Curitiba e FIIs.",
        referencia: "Relatório gerencial Fevereiro/2026"
      },
      {
        mes: "Mar/2026",
        resumo:
          "Resultado forte devido a ganho relevante de capital.",
        score_risco: 78,
        alerta: "RISCO OCULTO",
        nao_recorrente:
          "Venda do ativo Faria Lima impactou o resultado.",
        referencia: "Relatório gerencial Março/2026"
      }
    ]
  }
]
