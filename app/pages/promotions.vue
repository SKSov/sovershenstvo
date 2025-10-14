<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <PromotionsHero />
      <MainOffers />
      <MainUnique />
      <FeedbackForm />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/promotions', name: 'Акции' },
]
</script>
