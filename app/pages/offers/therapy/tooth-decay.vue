<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <TherapyToothDecayHero />
      <PriceTable :custom-data="priceTableData" />
      <AboutMission />
      <FeedbackForm />
      <TherapyToothDecayTextBlock />
      <CommentsSlider />
    </main>
  </div>
</template>

<script setup>
const priceTableData = [
  {
    title: 'Лечение кариеса',
    children: [
      {
        title: 'Лечение начального кариеса',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Лечение среднего кариеса',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Лечение глубокого кариеса',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Лечение множественного кариеса',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
]
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/therapy', name: 'Лечение зубов' },
  { path: '/offers/therapy/tooth-decay', name: 'Лечение кариеса' },
]
</script>
