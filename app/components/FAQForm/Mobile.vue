<template>
  <section class="faq-form-mobile">
    <div class="container">
      <h2 class="faq-form-title">Часто задаваемые <br />вопросы о лечении зубов</h2>

      <div class="faq-container">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="item"
          :class="{ open: faq.open }"
          @click="toggle(idx)"
        >
          <div class="item-control" aria-hidden="true">{{ faq.open ? '−' : '+' }}</div>
          <div class="question">{{ faq.question }}</div>
          <transition name="faq">
            <p v-show="faq.open" class="answer">{{ faq.answer }}</p>
          </transition>
        </div>
      </div>

      <div class="form">
        <div class="form-title">Остались вопросы?</div>
        <div class="form-subtitle">Запишитесь на бесплатную консультацию прямо сейчас</div>
        <div class="form-text">Заполните форму и с вами свяжется администратор клиники</div>
        <div class="inputs">
          <input class="input" type="text" placeholder="Ваше имя:" />
          <input class="input" type="text" placeholder="Ваш телефон:" />
        </div>
        <div class="controls">
          <div class="consent">
            <input id="faqm-consent" type="checkbox" class="consent-input" />
            <label for="faqm-consent" class="consent-label">
              <span class="consent-box"></span>
              <span class="consent-text">
                Я согласен с <a href="#">политикой конфиденциальности</a>
              </span>
            </label>
          </div>
          <button class="controls-btn">Записаться на прием</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Сколько стоит приём у стоматолога?',
    answer:
      'Стоимость зависит от вида консультации и необходимого лечения. Первый приём обычно включает осмотр, рентген (при необходимости) и составление плана лечения. Актуальные цены указаны в разделе «Услуги и цены».',
    open: false,
  },
  {
    question: 'Сколько стоит приём у стоматолога?',
    answer:
      'Стоимость зависит от вида консультации и необходимого лечения. Первый приём обычно включает осмотр, рентген (при необходимости) и составление плана лечения. Актуальные цены указаны в разделе «Услуги и цены».',
    open: false,
  },
  {
    question: 'Сколько стоит приём у стоматолога?',
    answer:
      'Стоимость зависит от вида консультации и необходимого лечения. Первый приём обычно включает осмотр, рентген (при необходимости) и составление плана лечения. Актуальные цены указаны в разделе «Услуги и цены».',
    open: false,
  },
  {
    question: 'Сколько стоит приём у стоматолога?',
    answer:
      'Стоимость зависит от вида консультации и необходимого лечения. Первый приём обычно включает осмотр, рентген (при необходимости) и составление плана лечения. Актуальные цены указаны в разделе «Услуги и цены».',
    open: false,
  },
  {
    question: 'Сколько стоит приём у стоматолога?',
    answer:
      'Стоимость зависит от вида консультации и необходимого лечения. Первый приём обычно включает осмотр, рентген (при необходимости) и составление плана лечения. Актуальные цены указаны в разделе «Услуги и цены».',
    open: false,
  },
])

function toggle(index) {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
.faq-form-mobile {
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 40px;
}

.faq-form-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: clamp(24px, 7.2vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.faq-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item {
  padding: 20px;
  border-radius: 22px;
  background: #f4f1f3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.item-control {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  user-select: none;
}

.question {
  color: #000;
  font-family: Inter;
  font-size: clamp(14px, 4.2vw, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 1.25;
  padding-right: 32px; /* prevent overlap with absolute +/- control */
}

.answer {
  color: #000;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.form {
  height: fit-content;
  margin-top: 16px;
  padding: 20px;
  border-radius: 22px;
  background: url('/images/faq-form/bg.png') center center / cover no-repeat;
}

.form-title {
  color: #fff;
  font-family: Inter;
  font-size: clamp(24px, 7.2vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.form-subtitle {
  margin-top: 10px;
  color: #fff;
  font-family: Inter;
  font-size: clamp(12px, 4vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.form-text {
  color: #fff;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 10px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
}

.input {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 14px 21px;
  border-radius: 39px;
  background: #fff;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.controls {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.controls-btn {
  padding: 10px 17px;
  background: #fff;
  border-radius: 26px;
  border: none;
  color: #1e1e1e;
  font-family: Inter;
  font-size: clamp(12px, 3.6vw, 14px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  gap: 10px;
  cursor: pointer;
  width: 200px;
}

.consent-label a {
  color: inherit;
  text-decoration: underline;
}

.consent-box {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #fff;
  background: #fff;
  position: relative;
}

.consent-text {
  color: #fff;
  font-family: Inter;
  font-size: clamp(10px, 3.2vw, 12px);
  font-style: normal;
  font-weight: 300;
  line-height: 1.25;
}

.consent-input:checked + .consent-label .consent-box {
  background: #fff;
  border-color: #fff;
}

.consent-input:checked + .consent-label .consent-box::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 3px;
  width: 6px;
  height: 10px;
  border-right: 2px solid #0079ff;
  border-bottom: 2px solid #0079ff;
  transform: rotate(45deg);
}

.consent-input:focus + .consent-label .consent-box {
  box-shadow: 0 0 0 3px rgba(0, 121, 255, 0.2);
}

/* Smooth expand/collapse */
.faq-enter-active,
.faq-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

.faq-enter-to,
.faq-leave-from {
  max-height: 400px;
  opacity: 1;
}

@media (min-width: 992px) {
  .faq-form-mobile {
    display: none;
  }
}
</style>
