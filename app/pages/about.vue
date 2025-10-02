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
      <FAQForm />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/about', name: 'О нас' },
]
</script>
