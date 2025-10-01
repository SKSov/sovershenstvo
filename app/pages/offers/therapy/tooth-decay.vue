<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <AboutHero />
      <AboutMission />
      <AboutDoctors />
      <CommentsSlider />
      <FeedbackForm />
      <LicensesSlider />
    </main>
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/therapy', name: 'Лечение зубов' },
  { path: '/offers/therapy/tooth-decay', name: 'Лечение кариеса' },
]
</script>
