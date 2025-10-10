<template>
  <section class="about-mobile">
    <div class="container">
      <div class="image-wrap">
        <img src="/images/page-about/hero.png" alt="about" />
      </div>

      <div class="card top">
        <div class="title">Каждый зуб во рту <br />человека ценнее <br />бриллианта</div>
        <p class="subtitle">— Мигель де Сервантес</p>
        <AboutHeroIconsQuotes class="quotes" style="width: 100px" />
      </div>

      <div class="card bottom">
        <div class="text">
          Мы гордимся тем, что предлагаем не просто лечение, а комплексный подход к здоровью полости
          рта, основанный на передовых технологиях, опыте и искренней заботе о каждом пациенте.
        </div>
        <div class="items">
          <div class="item" style="grid-column: span 2">
            <div class="number">250 000+</div>
            <p>довольных пациентов</p>
          </div>
          <div class="item">
            <div class="number">18</div>
            <p>лет на рынке</p>
          </div>
          <div class="item">
            <div class="number">23</div>
            <p>человека в команде</p>
          </div>
        </div>
        <button class="about-btn" @click="openFeedbackModal">Записаться на прием</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutHeroIconsQuotes from './Icons/quotes.vue'

const { open } = useFeedbackModal()

function openFeedbackModal() {
  open()
}
</script>

<style scoped>
.about-mobile {
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 40px;
}

.card {
  position: relative;
  border-radius: 20px;
  background: #eaf2fc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 5px;
  overflow: hidden;
}

.title {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(24px, 7.2vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
}

.subtitle {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
}

.quotes {
  position: absolute;
  right: 16px;
  bottom: 12px;
  transform: translateY(40%);
}

.image-wrap {
  margin: 16px 0;
  border-radius: 20px;
  overflow: hidden;
}

.image-wrap img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.bottom {
  gap: 14px;
}

.text {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.item {
  display: grid;
  gap: 4px;
}

.number {
  color: #0079ff;
  font-family: Inter, sans-serif;
  font-size: clamp(18px, 6vw, 24px);
  font-style: normal;
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
}

.item p {
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(11px, 3.4vw, 13px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
}

.about-btn {
  width: fit-content;
  padding: 10px 17px;
  background: #0079ff;
  border-radius: 26px;
  border: none;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

@media (min-width: 769px) {
  .about-mobile {
    display: none;
  }
}
</style>
