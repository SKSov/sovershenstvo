<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <ReviewsHero />
      <ReviewsCards />
      <FeedbackForm />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/reviews', name: 'Отзывы' },
]
</script>
