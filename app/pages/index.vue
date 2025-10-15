<template>
  <div>
    <AppHeader />
    <main>
      <MainHero />
      <MainStrengths />
      <MainServices />
      <MainOffers />
      <MainUnique />
      <MainDetails />
      <MainWhy />
      <PriceTable :data="pricingData" :is-collapsed="true" />
      <FeedbackForm />
      <DoctorsSlider />
      <CommentsSlider />
      <LicensesSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const pricingData = await usePriceTable()

onMounted(async () => {
  const response = await fetch('api.unyto.ru:8443/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: 'stomatologpnz', // токен сайта
      name: 'test',
      phone: 'test',
    }),
  })

  const result = await response.json()
  console.log(result)
})
</script>
