<template>
  <section class="reviews-cards">
    <div class="container">
      <h2 class="reviews-cards-title">Отзывы</h2>
      <div class="filters">
        <UISelect v-model="selectedProduct" :options="products" />
        <UISelect v-model="selectedDoctor" :options="doctors" />
      </div>
      <div class="cards-grid" :class="{ collapsed: !showMore }">
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/1.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars style="flex-shrink: 0" />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены. Для современного мира граница
            обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для вывода текущих активов. Банальные, но неопровержимые выводы, а также
            сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов. В
            рамках спецификации современных стандартов, сторонники тоталитаризма в науке являются
            только методом политического участия и описаны максимально подробно. Идейные соображения
            высшего порядка, а также курс на социально-ориентированный национальный проект выявляет
            срочную потребность глубокомысленных рассуждений. Но базовые сценарии поведения
            пользователей функционально разнесены на независимые элементы.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/2.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены. Для современного мира граница
            обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для вывода текущих активов. Банальные, но неопровержимые выводы, а также
            сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов. В
            рамках спецификации современных стандартов, сторонники тоталитаризма в науке являются
            только методом политического участия и описаны максимально подробно. Идейные соображения
            высшего порядка, а также курс на социально-ориентированный национальный проект выявляет
            срочную потребность глубокомысленных рассуждений. Но базовые сценарии поведения
            пользователей функционально разнесены на независимые элементы.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/3.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/4.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены. Для современного мира граница
            обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для вывода текущих активов. Банальные, но неопровержимые выводы, а также
            сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/1.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены. Для современного мира граница
            обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для вывода текущих активов. Банальные, но неопровержимые выводы, а также
            сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов. В
            рамках спецификации современных стандартов, сторонники тоталитаризма в науке являются
            только методом политического участия и описаны максимально подробно. Идейные соображения
            высшего порядка, а также курс на социально-ориентированный национальный проект выявляет
            срочную потребность глубокомысленных рассуждений. Но базовые сценарии поведения
            пользователей функционально разнесены на независимые элементы.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="user">
            <img class="avatar" src="/images/page-reviews/avatars/2.png" alt="avatar" />
            <p class="name">Инкар Мухаметкан</p>
            <p class="date">13.09.2023</p>
            <div class="platform">Яндекс</div>
            <ReviewsCardsStars />
          </div>
          <div class="text">
            Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы
            лишь добавляют фракционных разногласий и разоблачены. Для современного мира граница
            обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для вывода текущих активов. Банальные, но неопровержимые выводы, а также
            сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов. В
            рамках спецификации современных стандартов, сторонники тоталитаризма в науке являются
            только методом политического участия и описаны максимально подробно. Идейные соображения
            высшего порядка, а также курс на социально-ориентированный национальный проект выявляет
            срочную потребность глубокомысленных рассуждений. Но базовые сценарии поведения
            пользователей функционально разнесены на независимые элементы.
          </div>
          <div class="info">
            <div class="doctor">Лечащий врач <span>Калашников Денис Анатольевич</span></div>
            <div class="products">
              <p class="normal">Оказанные услуги</p>
              <p>Лечение кариеса</p>
              <p>Удаление зуба</p>
            </div>
          </div>
        </div>
      </div>
      <UIButton variant="secondary" class="show-more-btn" @click="showMore = !showMore">{{
        showMore ? 'Скрыть' : 'Показать ещё'
      }}</UIButton>
    </div>
  </section>
</template>

<script setup>
const products = ref([
  { value: 'all', label: 'Все услуги' },
  { value: 'caries', label: 'Лечение кариеса' },
  { value: 'extraction', label: 'Удаление зуба' },
])

const doctors = ref([
  { value: 'all', label: 'Все врачи' },
  { value: 'kalashnikov', label: 'Калашников Денис Анатольевич' },
  { value: 'ivanov', label: 'Иванов Иван Иванович' },
])

const showMore = ref(false)

const selectedProduct = ref(products.value[0])
const selectedDoctor = ref(doctors.value[0])
</script>

<style scoped>
.reviews-cards {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.reviews-cards-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.cards-grid {
  margin-top: 25px;
  /* Two-column masonry layout */
  column-count: 2;
  column-gap: 20px;
}

.cards-grid.collapsed .block:nth-child(n + 5) {
  display: none;
}

.block {
  padding: 40px;
  border-radius: 35px;
  border: 1px solid #878787;
  display: flex;
  flex-direction: column;
  /* Prevent items from breaking across columns and add vertical spacing */
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  margin-bottom: 20px;
}

.user {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 18px;
}

.name {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  margin-right: 25px;
}

.date {
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
  margin-right: 20px;
}

.platform {
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
  margin-right: 10px;
}

.text {
  margin-top: 20px;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}

.info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.doctor {
  display: flex;
  gap: 20px;
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
}

.doctor span {
  font-weight: 500;
}

.products {
  display: flex;
  gap: 20px;
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 22.5px */
}

.products .normal {
  font-weight: 300;
}

.filters {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}

.show-more-btn {
  margin-top: 40px;
}

/* Mobile adaptation */
@media (max-width: 768px) {
  .reviews-cards {
    padding: 60px 0;
  }

  .reviews-cards-title {
    font-size: clamp(24px, 7.2vw, 30px);
  }

  .filters {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .cards-grid {
    margin-top: 16px;
    column-count: 1;
    column-gap: 12px;
  }

  .block {
    padding: 20px;
    border-radius: 22px;
    margin-bottom: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }

  .name {
    font-size: clamp(14px, 4.5vw, 16px);
    margin-right: 12px;
  }

  .date,
  .platform {
    font-size: clamp(12px, 3.6vw, 14px);
    margin-right: 10px;
  }

  .text {
    margin-top: 12px;
    font-size: clamp(12px, 3.6vw, 14px);
    line-height: 1.25;
  }

  .info {
    gap: 10px;
    margin-top: 16px;
  }

  .doctor,
  .products {
    flex-direction: column;
    gap: 12px;
    font-size: clamp(12px, 3.6vw, 14px);
  }

  .show-more-btn {
    margin-top: 20px;
    padding: 10px 17px;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /* Re-layout user row into two lines on mobile */
  .user {
    display: grid;
    grid-template-columns: 40px 1fr auto;
    grid-template-rows: auto auto;
    column-gap: 12px;
    row-gap: 4px;
    align-items: center;
  }

  .avatar {
    grid-column: 1;
    grid-row: 1 / span 2;
    width: 40px;
    height: 40px;
    margin-right: 0;
  }

  .name {
    grid-column: 2;
    grid-row: 1;
    margin-right: 0;
  }

  .date {
    grid-column: 2;
    grid-row: 2;
    margin-right: 0;
  }

  .platform {
    grid-column: 3;
    grid-row: 2;
    margin-right: 0;
  }
}
</style>
