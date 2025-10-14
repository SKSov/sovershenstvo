<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersToothRestorationHero />
      <PriceTable :data="priceTableData" :is-collapsed="true" />
      <AboutMission />
      <FeedbackForm />
      <OffersToothRestorationTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm :faqs="faqs" :title="faqTitle" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/offers/ToothRestoration/useFaq'

const faqs = await useFaq()
const faqTitle = 'Часто задаваемые <br />вопросы об установлении коронки и протезов'

const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/tooth-restoration', name: 'Установление коронки и протезов' },
]
</script>
