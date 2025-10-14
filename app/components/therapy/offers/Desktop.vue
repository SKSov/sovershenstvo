<template>
  <section class="offers">
    <div class="container">
      <h2 class="offers-title">Услуги</h2>
      <div class="grid">
        <NuxtLink to="/offers/tooth-decay" class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
            </div>
            <TherapyOffersIconsFirst class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </NuxtLink>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Имплантация</div>
              <p>Установка импланта нового поколения без боли</p>
            </div>
            <TherapyOffersIconsThird class="icon" />
          </div>
          <div class="bottom">
            <p>от 45 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Исправление прикуса</div>
              <p>Установка брекетов и виниров</p>
            </div>
            <TherapyOffersIconsFourth class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Установление коронки и протезов</div>
              <p>А также других ортопедических конструкций</p>
            </div>
            <TherapyOffersIconsFifth class="icon" />
          </div>
          <div class="bottom">
            <p>от 12 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Удаление зуба</div>
              <p>Любая сложность операции</p>
            </div>
            <TherapyOffersIconsSixth class="icon" />
          </div>
          <div class="bottom">
            <p>от 1 800 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Профессиональная чистка и отбеливание</div>
              <p>Эстетические и профилактические процедуры</p>
            </div>
            <TherapyOffersIconsSecond class="icon" />
          </div>
          <div class="bottom">
            <p>от 7 500 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offers {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.offers-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.item {
  border-radius: 35px;
  background: #eaf2fc;
  padding: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.text {
  max-width: 360px;
}

.topic {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  min-height: 45px;
}

.text p {
  margin-top: 12px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  min-height: 35px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom p {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}

.icon {
  width: 76px;
  height: 76px;
  flex-shrink: 0;
}
</style>
