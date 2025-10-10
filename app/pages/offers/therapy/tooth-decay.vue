<template>
  <div>
    <AppHeader v-if="!isMobile" />
    <AppHeaderMobile v-else />
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
const isMobile = ref(false)

onMounted(() => {
  const mq = window.matchMedia('(max-width: 991px)')
  const apply = () => (isMobile.value = mq.matches)
  apply()
  mq.addEventListener('change', apply)
  onBeforeUnmount(() => mq.removeEventListener('change', apply))
})
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
  { path: '/offers/tooth-decay', name: 'Лечение кариеса' },
]
</script>
