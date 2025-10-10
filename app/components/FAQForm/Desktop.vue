<template>
  <section class="faq-form">
    <div class="container">
      <h2 class="faq-form-title">Часто задаваемые <br />вопросы о лечении зубов</h2>
      <div class="grid">
        <div class="faq-container">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="item"
            :class="{ open: faq.open }"
            @click="toggle(idx)"
          >
            <div class="item-control">{{ faq.open ? '−' : '+' }}</div>
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
            <button class="controls-btn" @click="openFeedbackModal">Записаться на прием</button>
            <div class="consent">
              <input id="faq-consent" type="checkbox" class="consent-input" />
              <label for="faq-consent" class="consent-label">
                <span class="consent-box"></span>
                <span class="consent-text">
                  Я согласен с <a href="#">политикой конфиденциальности</a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const { open } = useFeedbackModal()

function openFeedbackModal() {
  open()
}

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
.faq-form {
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
  margin-top: 60px;
}

.faq-form-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form {
  height: fit-content;
  padding: 40px;
  border-radius: 35px;
  background: url('/images/faq-form/bg.png') center center / cover no-repeat;
}

.form-title {
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.form-subtitle {
  margin-top: 30px;
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 37.5px */
}

.form-text {
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  margin-top: 17px;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  max-width: 640px;
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
  background: #fff;
  border-radius: 45px;
  border: none;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;
}

.controls-btn:hover {
  background: #e6e6e6;
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
  border: 1px solid #fff;
  background: #fff;
  position: relative;
}

.consent-text {
  color: #fff;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 15px */
}

.consent-input:checked + .consent-label .consent-box {
  background: #fff;
  border-color: #fff;
}

.consent-input:checked + .consent-label .consent-box::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 3px;
  width: 8px;
  height: 14px;
  border-right: 2px solid #0079ff;
  border-bottom: 2px solid #0079ff;
  transform: rotate(45deg);
}

.consent-input:focus + .consent-label .consent-box {
  box-shadow: 0 0 0 3px rgba(0, 121, 255, 0.2);
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  padding: 40px;
  border-radius: 35px;
  background: #f4f1f3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.item-control {
  position: absolute;
  right: 40px;
  top: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  user-select: none;
}

.question {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
}

.answer {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
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
</style>
