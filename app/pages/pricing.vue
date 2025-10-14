<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <PricingHero v-if="!isMobile" />
      <PriceTable :data="pricingData" />
      <MainUnique />
      <AboutMission />
      <FeedbackForm />
      <LicensesSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/pricing', name: 'Стоимость услуг' },
]

const pricingData = await usePriceTable()
</script>
