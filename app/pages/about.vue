<template>
  <div>
    <AppHeader v-if="!isMobile" />
    <AppHeaderMobile v-else />
    <main>
      <AppBreadcrumbs :path="breadcrumbs" />
      <AboutHero />
      <DoctorsSlider />
      <AboutMission />
      <AboutDoctors />
      <CommentsSlider />
      <FeedbackForm />
      <LicensesSlider />
      <FAQForm v-if="!isMobile" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
const isMobile = ref(false)

onMounted(() => {
  const mq = window.matchMedia('(max-width: 991px)')
  const apply = () => (isMobile.value = mq.matches)
  apply()
  mq.addEventListener('change', apply)
  onBeforeUnmount(() => mq.removeEventListener('change', apply))
})
const breadcrumbs = [
  { path: '/', name: 'Главная' },
  { path: '/about', name: 'О нас' },
]
</script>
