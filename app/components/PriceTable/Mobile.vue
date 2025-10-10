<template>
  <section class="price-mobile">
    <div class="container">
      <h2 class="price-title">Доступные цены на лечение</h2>
      <div class="price-subtitle">Делаем качественную стоматологию доступной</div>

      <div class="price-list">
        <div v-for="(section, sIndex) in data" :key="`sec-${sIndex}`" class="price-section">
          <h3 class="price-category">{{ section.title }}</h3>

          <div
            v-for="(item, iIndex) in section.children"
            :key="`row-${sIndex}-${iIndex}`"
            class="price-item"
          >
            <div class="service">{{ item.title }}</div>
            <div class="prices">
              <div class="price-line">
                <span class="label">Цена в клинике:</span>
                <span class="value value--our">{{ item.our_price }} ₽</span>
              </div>
              <div class="price-line">
                <span class="label">Цена по городу:</span>
                <span class="value">{{ item.price }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="price-button">
        <button class="price-btn" @click="navigateTo('/offers/therapy/tooth-decay')">
          Записаться на прием
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    required: false,
    default: () => [],
  },
})
</script>

<style scoped>
.price-mobile {
  padding: 60px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.price-title {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(22px, 5.5vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
}

.price-subtitle {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 12px;
}

.price-list {
  margin-top: 20px;
  display: grid;
  gap: 18px;
}

.price-section {
  display: grid;
  gap: 12px;
}

.price-category {
  margin: 0;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(16px, 4.8vw, 20px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
}

.price-item {
  border-radius: 14px;
  background: #f6f9fd;
  padding: 14px 14px 12px 14px;
  display: grid;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.service {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(13px, 4vw, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
}

.prices {
  display: grid;
  gap: 6px;
}

.price-line {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.label {
  color: #000;
  opacity: 0.6;
  font-family: Inter, sans-serif;
  font-size: clamp(10px, 3.4vw, 12px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.value {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(13px, 4vw, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  white-space: nowrap;
}

.value--our {
  font-weight: 600;
}

.price-button {
  margin-top: 20px;
}

.price-btn {
  padding: 10px 17px;
  background: #0079ff;
  border-radius: 26px;
  border: none;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;
}

.price-btn:hover {
  background: #0056cc;
}

@media (min-width: 992px) {
  .price-mobile {
    display: none;
  }
}
</style>
