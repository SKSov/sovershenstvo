<template>
  <button class="btn" :class="variant" @click="onClick"><slot /></button>
</template>

<script setup>
const { onClick } = defineProps({
  onClick: { type: Function, required: false, default: () => {} },
  variant: { type: String, required: false, default: 'primary' },
})
</script>

<style scoped>
.btn {
  width: fit-content;
  padding: 18.5px 30px;
  background: #0079ff;
  border-radius: 45px;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;
}

@media (max-width: 768px) {
  .btn {
    padding: 10px 17px;
    border-radius: 26px;
    font-size: clamp(12px, 3.8vw, 16px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.btn:hover {
  background: #0056cc;
}

.btn.secondary {
  border: 2px solid #0079ff;
  background: #fff;
  color: #0079ff;
}

.btn.secondary:hover {
  background: #0079ff;
  color: #fff;
}
</style>
