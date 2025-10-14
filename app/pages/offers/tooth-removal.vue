<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersToothRemovalHero />
      <PriceTable :data="priceTableData" :is-collapsed="true" />
      <AboutMission />
      <FeedbackForm />
      <OffersToothRemovalTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm :faqs="faqs" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/offers/ToothRemoval/useFaq'

const faqs = await useFaq()

const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/tooth-removal', name: 'Удаление зуба' },
]
</script>
