<template>
  <section class="offers">
    <div class="container">
      <h2 class="offers-title">
        Специальные <br />
        предложения
      </h2>

      <div class="offers-grid">
        <div class="card">
          <img src="/images/offers/1.png" alt="Offer" />
          <div class="content">
            <div class="badge">Акция</div>
            <div class="text">
              <div class="title">Скидка 50%</div>
              <div class="subtitle">на чистку зубов</div>
            </div>
            <div class="more-link"><span>Подробнее</span> <MainOffersArrow /></div>
          </div>
        </div>
        <div class="card">
          <img src="/images/offers/1.png" alt="Offer" />
          <div class="content">
            <div class="badge">Акция</div>
            <div class="text">
              <div class="title">Скидка 50%</div>
              <div class="subtitle">на компьютерную томографию</div>
            </div>
            <div class="more-link"><span>Подробнее</span> <MainOffersArrow /></div>
          </div>
        </div>
        <div class="card bottom">
          <div class="badge">Акция</div>
          <div class="title">Бесплатный прием врача хирурга-имплантолога</div>
          <div class="more-link"><span>Подробнее</span></div>
        </div>
        <div class="with-button">
          <div class="card bottom">
            <div class="badge">Акция</div>
            <div class="title">
              Имплант зуба за <br />
              45 000 рублей
            </div>
            <div class="more-link"><span>Подробнее</span></div>
          </div>
          <div class="all-offers" @click="navigateTo('/promotions')">Смотреть <br />все акции</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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

.offers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  border-radius: 50px;
  aspect-ratio: 830/537;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.3s ease;
  background-color: #0079ff;
}

.card .content .badge {
  padding: 15px 39px;
  border-radius: 59px;
  background: #fff;
  color: #0079ff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.card .content .title {
  color: #fff;
  font-family: Inter;
  font-size: 63px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card .content .subtitle {
  color: #fff;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 32.5px */
  margin-top: 12px;
}

.card .content .more-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card .content .more-link span {
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card:hover .content {
  opacity: 1;
}

.card:hover img {
  opacity: 0.1;
}

.card img {
  display: block;
  width: 100%;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.card.bottom {
  padding: 40px;
  border-radius: 35px;
  aspect-ratio: auto;
  display: flex;
  flex-direction: column;
  gap: 27px;
  border-radius: 35px;
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%), #f6f9fd;
}

.badge {
  width: fit-content;
  border-radius: 59px;
  border: 2px solid #0079ff;
  border-radius: 50px;
  padding: 15px 28px;
  color: #0079ff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.more-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.more-link span {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}

.with-button {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.all-offers {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  background: #0079ff;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s ease;
}

.all-offers:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
</style>
