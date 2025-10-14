<template>
  <div>
    <AppHeader />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <OffersDentalTreatmentHero />
      <PriceTable :data="priceTableData" />
      <AboutMission />
      <FeedbackForm />
      <OffersDentalTreatmentTextBlock />
      <DoctorsSlider />
      <CommentsSlider />
      <FAQForm />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const priceTableData = await usePriceTable()
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/offers', name: 'Услуги' },
  { path: '/offers/dental-treatment', name: 'Лечение зубов' },
]
</script>
