export default function FiiCard({ fii }) {

  const getBadgeColor = () => {
    if (fii.sustentabilidade === "Alta") return "bg-green-100 text-green-700"
    if (fii.sustentabilidade === "Média") return "bg-yellow-100 text-yellow-700"
    return "bg-yellow-200 text-yellow-800"
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {fii.ticker} — {fii.mes}
      </h2>

      <div className="space-y-3 text-sm">

        <p>
          <span className="font-semibold text-gray-700">Resumo:</span>{" "}
          {fii.resumo}
        </p>

        <p className="flex items-start gap-2 text-red-600">
          <span>❗</span>
          <span>
            <span className="font-semibold">Rendimento Não Recorrente:</span>{" "}
            {fii.nao_recorrente.existe
              ? fii.nao_recorrente.descricao
              : "Não identificado."}
          </span>
        </p>

        <p className="flex items-start gap-2 text-yellow-600">
          <span>⚠️</span>
          <span>
            <span className="font-semibold">Riscos:</span>{" "}
            {fii.riscos}
          </span>
        </p>

        <p>
          <span className="font-semibold text-gray-700">Sustentabilidade:</span>{" "}
          <span className={`px-2 py-1 rounded text-xs font-medium ${getBadgeColor()}`}>
            {fii.sustentabilidade}
          </span>
        </p>

        <p>
          <span className="font-semibold text-gray-700">Conclusão:</span>{" "}
          {fii.conclusao}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Fonte:</span>{" "}
          {fii.referencia}
        </p>

      </div>
    </div>
  )
}
