export const useFaq = async () => {
  const { data } = await useAsyncData('faq', async () => {
    return queryCollection('faq').first()
  })

  const body = data?.value?.meta?.body || {}
  const list = body?.list || {}

  const entries = Object.entries(list)
    .filter(([key, val]) => key.startsWith('item') && val)
    .sort((a, b) => {
      const na = parseInt(a[0].replace(/\D/g, '') || '0', 10)
      const nb = parseInt(b[0].replace(/\D/g, '') || '0', 10)
      return na - nb
    })

  const items = entries
    .map(([, it]) => ({
      question: it?.question || '',
      answer: it?.answer || '',
      open: false,
    }))
    .filter((x) => x.question || x.answer)

  return {
    title: body?.title || 'Часто задаваемые <br />вопросы о лечении зубов',
    items,
  }
}
