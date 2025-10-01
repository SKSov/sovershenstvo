<template>
  <section class="price">
    <div class="container">
      <h2 class="price-title">Доступные цены на лечение</h2>
      <div class="price-subtitle">Делаем качественную стоматологию доступной</div>

      <div class="price-table">
        <div class="price-head">
          <div></div>
          <div></div>
          <div class="price-head-label-our">Цена в клинике:</div>
          <div class="price-head-label">Цена по городу:</div>
        </div>

        <div
          v-for="(section, sectionIndex) in data"
          :key="`section-${sectionIndex}`"
          :class="['price-group', { 'price-group--single': section.children.length === 1 }]"
        >
          <div
            v-for="(item, itemIndex) in section.children"
            :key="`row-${sectionIndex}-${itemIndex}`"
            class="price-row"
          >
            <div class="price-col price-col--category">
              <span v-if="itemIndex === 0">{{ section.title }}</span>
            </div>
            <div class="price-col price-col--service">{{ item.title }}</div>
            <div class="price-col price-col--our-price">{{ item.our_price }} ₽</div>
            <div class="price-col price-col--price">{{ item.price }} ₽</div>
          </div>
        </div>
      </div>

      <div class="price-button">
        <button class="price-btn">Записаться на прием</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  customData: {
    type: Array,
    required: false,
    default: () => [],
  },
})

const data = props.customData || [
  {
    title: 'Имплантация',
    children: [
      {
        title: 'Установка импланта Osstem',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Установка импланта Straumann',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Установка импланта Neodent',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Лечение зубов',
    children: [
      {
        title: 'Лечение кариеса',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Лечение пульпита',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Удаление зубов',
    children: [
      {
        title: 'Удаление зуба',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
  {
    title: 'Гигиена и отбеливание',
    children: [
      {
        title: 'Гигиена зубов',
        our_price: '15 000',
        price: '19 000',
      },
      {
        title: 'Отбеливание зубов',
        our_price: '15 000',
        price: '19 000',
      },
    ],
  },
]
</script>

<style scoped>
.price {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.price-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.price-subtitle {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 37.5px */
  margin-top: 20px;
}

.price-table {
  margin-top: 36px;
}

.price-head,
.price-row {
  display: grid;
  grid-template-columns: 1.6fr 3.2fr 1.4fr 1.4fr;
  column-gap: 24px;
  align-items: center;
}

.price-head {
  margin-bottom: 8px;
}

.price-head-label-our {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  text-align: right;
  white-space: nowrap;
}

.price-head-label {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  text-align: right;
  white-space: nowrap;
}

.price-group .price-row {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.price-row {
  padding: 22px 0;
}

.price-group .price-row:first-child {
  border-top: none;
  padding-top: 30px;
}

.price-group--single .price-row:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.price-col--category {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 37.5px */
}

.price-col--service {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 37.5px */
}

.price-col--our-price {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 37.5px */
  text-align: right;
  white-space: nowrap;
}

.price-col--price {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 37.5px */
  text-align: right;
  white-space: nowrap;
}

.price-btn {
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
  margin-top: 40px;
}

.price-btn:hover {
  background: #0056cc;
}
</style>
