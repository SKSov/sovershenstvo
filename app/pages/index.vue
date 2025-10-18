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
      <PriceTable
        v-if="mainData?.pricing && mainData?.pricing.length > 0"
        :data="mainData?.pricing"
        :is-collapsed="true"
      />
      <FeedbackForm />
      <DoctorsSlider />
      <CommentsSlider />
      <LicensesSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useMain } from '@/composables/content/useMain'

const mainData = await useMain()

// onMounted(async () => {
//   const apiUrl = 'https://api.unyto.ru:8443/feedback'
//   const response = await fetch(apiUrl, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       token: 'stomatologpnz', // токен сайта
//       name: 'test',
//       phone: 'test',
//     }),
//   })

//   const result = await response.json()
// })
</script>
