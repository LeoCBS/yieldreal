import { Building2 } from "lucide-react"

export default function FiiCardGrouped({ fii }) {

  const badge = (alerta) => {
    if (alerta.includes("RISCO")) return "bg-red-100 text-red-700"
    if (alerta.includes("ATENÇÃO")) return "bg-yellow-100 text-yellow-700"
    return "bg-green-100 text-green-700"
  }

  const scoreColor = (score) => {
    if (score >= 70) return "text-red-600"
    if (score >= 55) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="col-span-3 flex gap-3">

          <div className="bg-gray-100 p-3 rounded-lg">
            <Building2 size={20} />
          </div>

          <div>
            <div className="font-semibold text-lg">{fii.ticker}</div>

            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
              {fii.score_medio >= 70 ? "RISCO OCULTO" : "ATENÇÃO"}
            </span>

            <div className="mt-3 text-sm text-gray-600">
              Score médio
            </div>
            <div className={`font-bold ${scoreColor(fii.score_medio)}`}>
              {fii.score_medio} <span className="text-gray-400">/100</span>
            </div>

            <div className="mt-2 text-sm text-gray-600">
              Sustentabilidade
            </div>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
              {fii.sustentabilidade}
            </span>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="col-span-4">
          <div className="font-semibold text-sm mb-2">
            Resumo do padrão
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {fii.resumo_padrao}
          </p>

          <div className="text-sm text-gray-500">
            Tipo de risco predominante
          </div>

          <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded mt-1 inline-block">
            {fii.tipo_risco}
          </span>
        </div>

        {/* RIGHT (timeline) */}
        <div className="col-span-5">
          <div className="font-semibold text-sm mb-3">
            Análise dos últimos meses
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-4 items-center min-w-max">

              {fii.historico.map((mes, index) => (
                <div key={index} className="flex items-center gap-4">

                  {index !== 0 && (
                    <div className="w-6 h-[2px] bg-gray-300" />
                  )}

                  <div className="border rounded-xl p-4 w-52 bg-gray-50">

                    <div className="flex justify-between mb-2">
                      <div className="text-sm font-medium">{mes.mes}</div>
                      <span className={`text-xs px-2 py-1 rounded ${badge(mes.alerta)}`}>
                        {mes.alerta}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 mb-2">
                      {mes.resumo}
                    </div>

                    <div className="text-xs text-gray-500">
                      Score: <b>{mes.score_risco}/100</b>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
