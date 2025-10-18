export const useFooter = async () => {
  const { data } = await useAsyncData('footer', async () => {
    return queryCollection('footer').first()
  })

  const body = data?.value?.meta?.body || {}

  const a1 = body?.address1 || {}
  const a2 = body?.address2 || {}
  const a3 = body?.address3 || {}

  const addresses = [a1, a2, a3]
    .map((a) => ({
      label: a?.label,
      phones: [a?.phone1, a?.phone2, a?.phone3].filter(Boolean),
    }))
    .filter((a) => a.label)

  return {
    title: body?.title,
    subtitle: body?.subtitle,
    city: body?.city,
    email: body?.email,
    summaryPhones: body?.summaryPhones,
    addresses,
  }
}
