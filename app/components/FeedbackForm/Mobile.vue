<template>
  <section class="feedback-mobile">
    <div class="container">
      <div class="form">
        <div class="form-content">
          <h2 class="title">Запишитесь на бесплатную консультацию прямо сейчас</h2>
          <div class="subtitle">Заполните форму и с вами свяжется администратор клиники</div>

          <div class="inputs">
            <input class="input" type="text" placeholder="Ваше имя:" />
            <input class="input" type="text" placeholder="Ваш телефон:" />
          </div>

          <label class="consent">
            <input type="checkbox" class="consent-input" />
            <span class="consent-box"></span>
            <span class="consent-text">
              Я согласен с <a href="#">политикой конфиденциальности</a>
            </span>
          </label>

          <button class="submit-btn">Записаться на прием</button>
        </div>

        <div class="form-image-wrap">
          <img src="/images/feedback-form.png" alt="feedbackForm" class="form-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feedback-mobile {
  padding: 60px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.form {
  border-radius: 20px;
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%), #fff;
}

.form-content {
  padding: 24px 20px;
}

.title {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(16px, 4.8vw, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
}

.subtitle {
  margin-top: 12px;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 13px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.form-image-wrap {
  margin-top: 14px;
  border-radius: 20px;
  overflow: hidden;
}

.form-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.inputs {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.input {
  width: 100%;
  border: none;
  outline: none;
  border-radius: 39px;
  background: #fff;
  padding: 14px 17px;
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.input::placeholder {
  color: #cbcbcb;
}

.consent {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}

.consent-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.consent-box {
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #878787;
  background: #fff;
  position: relative;
}

.consent-text {
  color: #878787;
  font-family: Inter, sans-serif;
  font-size: clamp(10px, 3.2vw, 12px);
  font-style: normal;
  font-weight: 300;
  line-height: 1.25;
}

.consent-text a {
  color: inherit;
  text-decoration: underline;
}

.consent-input:checked + .consent-box {
  background: #0079ff;
  border-color: #0079ff;
}

.consent-input:checked + .consent-box::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
}

.submit-btn {
  margin-top: 14px;
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
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #0056cc;
}

@media (min-width: 992px) {
  .feedback-mobile {
    display: none;
  }
}
</style>
