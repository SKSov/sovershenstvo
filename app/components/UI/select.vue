<template>
  <div ref="dropdownRef" class="dropdown">
    <div class="select" @click="toggle">
      <span>{{ modelValue.label }}</span>
      <ReviewsCardsArrow :class="{ rotated: isOpen }" />
    </div>
    <ul v-show="isOpen" class="options">
      <li v-for="option in options" :key="option.value" class="option" @click="choose(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { options, modelValue } = defineProps({
  options: { type: Array, required: true },
  modelValue: { type: Object, required: true },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const dropdownRef = ref(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function choose(option) {
  emit('update:modelValue', option)
  isOpen.value = false
}

function onClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.dropdown {
  position: relative;
}

.select {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 35px;
  border: 1px solid #1e1e1e;
  padding: 14.7px 24px;
  cursor: pointer;
}

.select .rotated {
  transform: rotate(180deg);
}

.select svg {
  transition: transform 0.2s ease;
}

.options {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 10;
  background: #fff;
  border: 1px solid #1e1e1e;
  border-radius: 20px;
  min-width: 100%;
  padding: 8px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.option {
  list-style: none;
  padding: 10px 16px;
  white-space: nowrap;
  cursor: pointer;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.option:hover {
  background: #f5f5f5;
}
</style>
