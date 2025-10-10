<template>
  <section class="feedback-form">
    <div class="container">
      <div class="form">
        <img src="/images/feedback-form.png" alt="feedbackForm" class="form-image" />
        <h2 class="title">
          Запишитесь на бесплатную <br />
          консультацию прямо сейчас
        </h2>
        <div class="subtitle">
          Заполните форму и с вами свяжется <br />
          администратор клиники
        </div>
        <div class="inputs">
          <input class="input" type="text" placeholder="Ваше имя:" />
          <input class="input" type="text" placeholder="Ваш телефон:" />
        </div>
        <div class="controls">
          <button class="controls-btn" @click="openFeedbackModal">Записаться на прием</button>
          <div class="consent">
            <input id="consent" type="checkbox" class="consent-input" />
            <label for="consent" class="consent-label">
              <span class="consent-box"></span>
              <span class="consent-text">
                Я согласен с <a href="#">политикой конфиденциальности</a>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { open } = useFeedbackModal()

function openFeedbackModal() {
  open()
}
</script>

<style scoped>
.feedback-form {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.form {
  padding: 80px 60px 100px 60px;
  border-radius: 50px;
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%);
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-image {
  position: absolute;
  right: 15px;
  bottom: 0;
  width: 50%;
  aspect-ratio: 913/820;
}

.title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.subtitle {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 37.5px */
  margin-top: 24px;
}

.inputs {
  display: flex;
  gap: 35px;
  margin-top: 60px;
  max-width: 750px;
}

.input {
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  padding: 20px 39px;
  border-radius: 59px;
  background: #fff;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 30px */
}

.controls {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.controls-btn {
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

.controls-btn:hover {
  background: #0056cc;
}

.consent {
  display: flex;
  align-items: center;
}

.consent-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.consent-label {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  width: 200px;
}

.consent-label a {
  color: inherit;
  text-decoration: underline;
}

.consent-box {
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #878787;
  background: #fff;
  position: relative;
}

.consent-text {
  color: #878787;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 15px */
}

.consent-input:checked + .consent-label .consent-box {
  background: #0079ff;
  border-color: #0079ff;
}

.consent-input:checked + .consent-label .consent-box::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 3px;
  width: 8px;
  height: 14px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(45deg);
}

.consent-input:focus + .consent-label .consent-box {
  box-shadow: 0 0 0 3px rgba(0, 121, 255, 0.2);
}
</style>
