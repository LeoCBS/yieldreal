import { useEffect, useState } from "react"
import LeadModal from "./components/LeadModal"
import FiiCardGrouped from "./components/FiiCardGrouped"
import FiiFilter from "./components/FiiFilter"
import { fetchFiis } from "./services/api"

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [fiis, setFiis] = useState([])
  const [selectedTickers, setSelectedTickers] = useState([])

  useEffect(() => {
    fetchFiis().then(data => {
      setFiis(data)
      setSelectedTickers(data.map(f => f.ticker))
    })
  }, [])

  const filtered =
    selectedTickers.length === 0
      ? fiis
      : fiis.filter(f => selectedTickers.includes(f.ticker))

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 text-white p-2 rounded-lg">📊</div>
              <div>
                <div className="font-bold text-lg">YieldReal</div>
                <div className="text-xs text-gray-500">
                  Análises inteligentes de FIIs
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="w-full md:w-96">
              <FiiFilter
                fiis={fiis}
                selected={selectedTickers}
                setSelected={setSelectedTickers}
              />
            </div>

            {/* RIGHT */}
            <button
              onClick={() => setOpenModal(true)}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Quero detectar riscos antes
            </button>

          </div>

        </div>
      </header>

      {/* STATUS BAR */}
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <div className="bg-green-50 border rounded-xl p-4 flex justify-between items-center">

          <div>
            <div className="font-semibold text-green-800">
              {selectedTickers.length} FIIs selecionados
            </div>
            <div className="text-sm text-green-700 break-words">
              {selectedTickers.join(", ")}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Receber alertas desses FIIs
            </button>

            {/* <button */}
            {/*   onClick={() => setSelectedTickers([])} */}
            {/*   className="bg-white border px-4 py-2 rounded-lg text-sm" */}
            {/* > */}
            {/*   Limpar */}
            {/* </button> */}
          </div>

        </div>
      </div>

      {/* CARDS */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        {filtered.map(fii => (
          <FiiCardGrouped key={fii.ticker} fii={fii} />
        ))}
      </main>
      <LeadModal open={openModal} onClose={() => setOpenModal(false)} />

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto px-6 pb-10 text-xs text-gray-400">
        As análises são baseadas nos relatórios gerenciais. Não são recomendação.
      </div>
    </div >
  )
}
