<template>
  <section class="offers">
    <div class="container">
      <h2 class="offers-title">Услуги</h2>
      <div class="grid">
        <NuxtLink to="/offers/therapy/tooth-decay" class="item">
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
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
            </div>
            <TherapyOffersIconsSecond class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
            </div>
            <TherapyOffersIconsThird class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
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
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
            </div>
            <TherapyOffersIconsFifth class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
            <TherapyOffersIconsArrow />
          </div>
        </div>
        <div class="item">
          <div class="top">
            <div class="text">
              <div class="topic">Лечение кариеса</div>
              <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами</p>
            </div>
            <TherapyOffersIconsSixth class="icon" />
          </div>
          <div class="bottom">
            <p>от 15 000 ₽</p>
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
}

.text p {
  margin-top: 12px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
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
