<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <DoctorsSlider :is-doctors-page="true" />
      <AboutMission />
      <FeedbackForm />
      <MainUnique />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/doctors', name: 'Специалисты' },
]
</script>
