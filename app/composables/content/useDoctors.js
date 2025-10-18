export const useDoctors = async () => {
  const { data } = await useAsyncData('doctors', () => {
    return queryCollection('doctors').first()
  })

  const body = data?.value?.meta?.body || {}

  function normalizeSlider(sliderObj) {
    if (!sliderObj || typeof sliderObj !== 'object') return null
    const title = (sliderObj.title || '').trim()
    const doctors = []
    // doctor1..doctor5
    const entries = Object.entries(sliderObj)
      .filter(([key]) => key.startsWith('doctor'))
      .sort((a, b) => {
        const na = parseInt(a[0].replace(/\D/g, '') || '0', 10)
        const nb = parseInt(b[0].replace(/\D/g, '') || '0', 10)
        return na - nb
      })

    for (const [, raw] of entries) {
      const name = (raw?.name || '').trim()
      const role = (raw?.role || '').trim()
      const photo = (raw?.photo || '').trim()
      const about = Array.isArray(raw?.about) ? raw.about : []
      const licensesObj = raw?.licenses || {}
      const licenses = Array.from({ length: 10 })
        .map((_, i) => (licensesObj[`l${i + 1}`] || '').trim())
        .filter((v) => !!v)

      if (!name && !role && !photo && about.length === 0 && licenses.length === 0) continue

      doctors.push({ name, role, photo, about, licenses })
    }

    if (!title && doctors.length === 0) return null
    return { title, doctors }
  }

  const slider = normalizeSlider(body.slider)

  return { title: (body.title || '').trim(), slider }
}
