export default function FiiCard({ fii }) {

  const getBadge = () => {
    if (fii.sustentabilidade === "Alta")
      return "bg-green-500/20 text-green-400 border-green-500/30"
    if (fii.sustentabilidade === "Média")
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    return "bg-red-500/20 text-red-400 border-red-500/30"
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6 hover:border-gray-600 transition">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">
          {fii.ticker} — {fii.mes}
        </h2>

        <span className={`px-3 py-1 text-sm rounded-full border ${getBadge()}`}>
          {fii.sustentabilidade}
        </span>
      </div>

      {fii.naoRecorrente !== "Não identificado." && (
        <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg mb-4">
          <p className="text-red-400 text-sm">
            ⚠️ Rendimento inflado detectado
          </p>
          <p className="text-gray-300 text-sm mt-1">
            {fii.naoRecorrente}
          </p>
        </div>
      )}

      <p className="text-gray-300 mb-3 text-sm">
        {fii.resumo}
      </p>

      <div className="text-yellow-400 text-sm mb-3">
        ⚠️ {fii.riscos}
      </div>

      <div className="text-white font-semibold text-sm">
        👉 {fii.conclusao}
      </div>
    </div>
  )
}
