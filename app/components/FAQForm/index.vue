<template>
  <FAQFormDesktop v-if="!isMobile" :faqs="props.faqs" :title="props.title" />
  <FAQFormMobile v-else :faqs="props.faqs" :title="props.title" />
</template>

<script setup>
const isMobile = ref(false)

const props = defineProps({
  faqs: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: 'Часто задаваемые <br />вопросы о лечении зубов',
  },
})

onMounted(() => {
  const mq = window.matchMedia('(max-width: 991px)')
  const apply = () => (isMobile.value = mq.matches)
  apply()
  mq.addEventListener('change', apply)
  onBeforeUnmount(() => mq.removeEventListener('change', apply))
})
</script>
