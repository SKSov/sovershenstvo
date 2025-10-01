<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <PricingHero />
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

const pricingData = [
  {
    title: 'Имплантация',
    children: [
      {
        title: 'Установка импланта Osstem',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Установка импланта Straumann',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Установка импланта Neodent',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Лечение зубов',
    children: [
      {
        title: 'Лечение кариеса',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Лечение пульпита',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Удаление зубов',
    children: [
      {
        title: 'Удаление зуба',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Гигиена и отбеливание',
    children: [
      {
        title: 'Гигиена зубов',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Отбеливание зубов',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
]
</script>
