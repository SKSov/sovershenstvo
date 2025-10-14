<template>
  <section class="reviews-hero-mobile">
    <div class="container">
      <div class="title">
        Ваше мнение – <br />
        наш ориентир
      </div>
      <div class="subtitle">
        Расскажите, что вы думаете <br />
        о нас. Мы ценим вашу честность!
      </div>

      <div class="image-wrap">
        <img src="/images/page-promotions/hero.png" alt="reviews" />
      </div>

      <div class="info">
        <div class="item">
          <TherapyHeroIconsSmiles />
          <p>Более 18 лет <br />мы дарим улыбки</p>
        </div>
        <div class="item">
          <TherapyHeroIconsClients />
          <p>250 000+ <br />довольных пациентов</p>
        </div>
        <div class="item">
          <TherapyHeroIconsAchivement />
          <p>Признание <br />на «Продокторов»</p>
        </div>
      </div>

      <div class="btns">
        <button class="therapy-btn" @click="openFeedbackModal">Записаться на прием</button>
        <UIButton variant="secondary" class="secondary-btn" @click="leaveReview"
          >Оставить отзыв</UIButton
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const { open } = useFeedbackModal()

function openFeedbackModal() {
  open()
}

function leaveReview() {
  window.open('https://yandex.ru/profile/1050283619?lang=ru', '_blank')
}
</script>

<style scoped>
.reviews-hero-mobile {
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 40px;
}

.image-wrap {
  border-radius: 20px;
  overflow: hidden;
  margin-top: 16px;
}

.image-wrap img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: clamp(24px, 7.2vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.subtitle {
  margin-top: 8px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: clamp(12px, 4vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.info {
  margin-top: 14px;
  border-radius: 22px;
  background: #eaf2fc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
}

.btns {
  margin-top: 16px;
  display: flex;
  gap: 12px;
}

.therapy-btn {
  width: fit-content;
  padding: 10px 17px;
  background: #0079ff;
  border-radius: 26px;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.secondary-btn {
  --btn-padding-x: 17px;
  --btn-padding-y: 10px;
  --btn-radius: 26px;
  font-size: clamp(12px, 3.6vw, 14px);
}

@media (min-width: 992px) {
  .reviews-hero-mobile {
    display: none;
  }
}
</style>
