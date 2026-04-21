import { useState, useEffect } from "react"
import FiiCard from "./components/FiiCard"
import LeadModal from "./components/LeadModal"
import { fetchFiis } from "./services/api"

export default function App() {
  const [fiis, setFiis] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchFiis().then(setFiis)
  }, [])

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

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white border rounded-xl p-6 mb-8 text-sm">

          <h3 className="font-semibold text-gray-800 mb-4">
            O que analisamos nos FIIs:
          </h3>

          <div className="space-y-3">

            <div>
              <span className="font-semibold text-red-600">
                ❗ Yield ilusório
              </span>
              <p className="text-gray-600">
                Dividendos inflados por vendas de ativos, ganhos pontuais ou eventos não recorrentes.
              </p>
            </div>

            <div>
              <span className="font-semibold text-yellow-600">
                ⚠️ Yield em queda
              </span>
              <p className="text-gray-600">
                Dividendos que parecem estáveis, mas estão sendo pressionados por vacância, saída de inquilinos ou queda operacional.
              </p>
            </div>

          </div>
        </div>
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
          Últimas Análises de FIIs
        </h2>

        {fiis.map((fii, index) => (
          <FiiCard key={index} fii={fii} />
        ))}
      </main>

      <LeadModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}
