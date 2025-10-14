<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <AboutHero />
      <DoctorsSlider />
      <AboutMission />
      <AboutDoctors />
      <CommentsSlider />
      <FeedbackForm />
      <LicensesSlider />
      <FAQForm :faqs="faqs" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/useFaq'

const faqs = await useFaq()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/about', name: 'О нас' },
]
</script>
