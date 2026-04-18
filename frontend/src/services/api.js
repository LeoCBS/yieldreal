const API_URL = import.meta.env.VITE_API_URL || null

export async function fetchFiis() {
  if (!API_URL) {
    const { mockFiis } = await import("../data")
    return mockFiis
  }

  const res = await fetch(`${API_URL}/fiis`)
  return res.json()
}
