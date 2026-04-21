import { useState } from "react"

export default function LeadModal({ open, onClose }) {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdaA6dI9nlFT_E4rfwa3-J7cEEhAhdx4RhkvNXxcWPQy5WRLA/formResponse"
  const FIELD_ID = "entry.590116403"

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append(FIELD_ID, email)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })

      setSent(true)
    } catch (err) {
      console.error(err)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        {!sent ? (
          <>
            <h2 className="text-lg font-semibold mb-2">
              Acesse análises completas
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              Receba alertas de dividendos não recorrentes e riscos ocultos antes do mercado.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Seu melhor email"
                className="w-full border rounded-md px-3 py-2 mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="w-full bg-yellow-400 text-black py-2 rounded-md font-semibold">
                Quero acesso
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">
              🚀 Cadastro realizado
            </h2>
            <p className="text-sm text-gray-600">
              Em breve você receberá novidades.
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 w-full"
        >
          Fechar
        </button>

      </div>
    </div>
  )
}
