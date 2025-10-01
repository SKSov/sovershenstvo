<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <AboutHero />
      <AboutMission />
      <PriceTable />
      <FeedbackForm />
      <CommentsSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/therapy', name: 'Лечение зубов' },
]
</script>
