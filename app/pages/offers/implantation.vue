<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersImplantationHero />
      <PriceTable :data="priceTableData" :is-collapsed="true" />
      <AboutMission />
      <FeedbackForm />
      <OffersImplantationTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm :faqs="faqs" :title="faqTitle" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { useFaq } from '~/composables/offers/Implantation/useFaq'

const faqs = await useFaq()
const faqTitle = 'Часто задаваемые <br />вопросы об имплантации'

const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/implantation', name: 'Имплантация' },
]
</script>
