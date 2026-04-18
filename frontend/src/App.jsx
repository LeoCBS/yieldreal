import { useEffect, useState } from "react"
import FiiCard from "./components/FiiCard"
import { fetchFiis } from "./services/api"

export default function App() {
  const [fiis, setFiis] = useState([])

  useEffect(() => {
    fetchFiis().then(setFiis)
  }, [])

  return (
    <div className="bg-black min-h-screen">

      <header className="text-center py-16 px-6 border-b border-gray-800">
        <img
          src="/logo.svg"
          alt="Yield Real"
          className="h-12 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]"
        />

        <h2 className="text-2xl text-white max-w-2xl mx-auto mb-4">
          Descubra quando o dividendo é ilusório antes do mercado perceber
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Detectamos rendimentos não recorrentes e riscos ocultos automaticamente.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
          Receber alertas
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        {fiis.map((fii, i) => (
          <FiiCard key={i} fii={fii} />
        ))}
      </main>

    </div>
  )
}
