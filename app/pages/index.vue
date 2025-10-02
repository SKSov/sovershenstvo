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
      <PriceTable :data="pricingData" />
      <FeedbackForm />
      <DoctorsSlider />
      <CommentsSlider />
      <LicensesSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
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
