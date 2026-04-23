import { useState } from "react"

export default function FiiFilter({ fiis, selected, setSelected }) {
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)

  const tickers = [...new Set(fiis.map(f => f.ticker))]

  const filtered = tickers.filter(t =>
    t.toLowerCase().includes(input.toLowerCase()) &&
    !selected.includes(t)
  )

  const addTicker = (ticker) => {
    setSelected([...selected, ticker])
    setInput("")
    setOpen(false)
  }

  const removeTicker = (ticker) => {
    setSelected(selected.filter(t => t !== ticker))
  }

  return (
    <div className="max-w-3xl mx-auto px-6 mt-6">

      {/* INPUT */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar FII (ex: HGLG11)"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setOpen(true)
          }}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* DROPDOWN */}
        {open && input && filtered.length > 0 && (
          <div className="absolute w-full bg-white border rounded-lg mt-1 shadow z-10">
            {filtered.map(ticker => (
              <div
                key={ticker}
                onClick={() => addTicker(ticker)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {ticker}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SELECTED (chips) */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">

          {selected.map(ticker => (
            <div
              key={ticker}
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {ticker}

              <button
                onClick={() => removeTicker(ticker)}
                className="text-xs"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={() => setSelected([])}
            className="text-sm text-blue-600"
          >
            Limpar
          </button>

        </div>
      )}
    </div>
  )
}
