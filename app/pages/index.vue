<template>
  <div>
    <AppHeader />
    <main>
      <MainHero />
      <MainStrengths />
      <MainServices />
      <MainOffers />
      <MainUnique />
      <MainDetails />
      <MainWhy />
      <PriceTable :data="pricingData" />
      <FeedbackForm />
      <DoctorsSlider />
      <CommentsSlider />
      <LicensesSlider />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const pricingData = await usePriceTable()
</script>
