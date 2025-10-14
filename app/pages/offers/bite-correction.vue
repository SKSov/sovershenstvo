<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersBiteCorrectionHero />
      <PriceTable :data="priceTableData" :is-collapsed="true" />
      <AboutMission />
      <FeedbackForm />
      <OffersBiteCorrectionTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm :faqs="faqs" :title="faqTitle" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/offers/BiteCorrection/useFaq'

const faqs = await useFaq()
const faqTitle = 'Часто задаваемые <br />вопросы об исправлении прикуса'

const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/bite-correction', name: 'Исправление прикуса' },
]
</script>
