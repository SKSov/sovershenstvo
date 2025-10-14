<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersDentalTreatmentHero />
      <PriceTable :data="priceTableData" :is-collapsed="true" />
      <AboutMission />
      <FeedbackForm />
      <OffersDentalTreatmentTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm :faqs="faqs" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/offers/ToothRestoration/useFaq'

const faqs = await useFaq()

const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/tooth-restoration', name: 'Установление коронки и протезов' },
]
</script>
