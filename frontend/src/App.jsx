import { useEffect, useState } from "react"
import FiiCard from "./components/FiiCard"
import FiiFilter from "./components/FiiFilter"
import LeadModal from "./components/LeadModal"
import { fetchFiis } from "./services/api"

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [fiis, setFiis] = useState([])
  const [selectedTickers, setSelectedTickers] = useState([])

  useEffect(() => {
    fetchFiis().then(data => {
      setFiis(data)

      // 🔥 seleciona todos automaticamente
      const allTickers = [...new Set(data.map(f => f.ticker))]
      setSelectedTickers(allTickers)
    })
  }, [])

  const filteredFiis =
    selectedTickers.length === 0
      ? fiis
      : fiis.filter(f => selectedTickers.includes(f.ticker))

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">

        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <img src="/logo.svg" className="h-8" />

          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold"
          >
            Quero detectar riscos antes do mercado
          </button>
        </div>

        <div className="text-center py-10 px-6">
          <h1 className="text-xl md:text-2xl font-semibold mb-3">
            Análises inteligentes dos principais FIIs com insights claros para investidores
          </h1>

          <p className="text-gray-300 inline-block bg-gray-700 px-4 py-2 rounded-md text-sm">
            Detecte dividendos ilusórios e rendas que vão cair — antes do mercado perceber
          </p>

          {/* CTA secundário */}
          <div className="mt-6">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              Acessar plano completo
            </button>
          </div>
        </div>
      </header>

      {/* 🔍 FILTRO (autocomplete + multi-select) */}
      <FiiFilter
        fiis={fiis}
        selected={selectedTickers}
        setSelected={setSelectedTickers}
      />

      {/* 📊 CONTADOR */}
      <div className="max-w-3xl mx-auto px-6 mt-4">
        <div className="flex justify-between items-center text-sm text-gray-600">

          <span>
            {filteredFiis.length} análise
            {filteredFiis.length !== 1 && "s"} encontrada
            {filteredFiis.length !== 1 && "s"}
          </span>

          {selectedTickers.length > 0 && (
            <span className="text-gray-500">
              Filtrando por:{" "}
              <span className="font-semibold">
                {selectedTickers.join(", ")}
              </span>
            </span>
          )}

        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-6">

        {filteredFiis.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum FII encontrado
          </p>
        ) : (
          filteredFiis.map((fii, index) => (
            <FiiCard key={index} fii={fii} />
          ))
        )}

      </main>
      <LeadModal open={openModal} onClose={() => setOpenModal(false)} />

    </div>
  )
}
