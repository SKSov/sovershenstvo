<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <TherapyToothDecayHero />
      <PriceTable :data="priceTableData" />
      <AboutMission />
      <FeedbackForm />
      <TherapyToothDecayTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/tooth-decay', name: 'Лечение кариеса' },
]
</script>
