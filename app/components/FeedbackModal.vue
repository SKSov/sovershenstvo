<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click="handleClose" />
    </Transition>

    <Transition name="modal">
      <div
        v-if="isOpen"
        class="modal-container"
        role="dialog"
        aria-modal="true"
        @click.self="handleClose"
      >
        <div class="modal-content">
          <img src="/images/feedback-modal.png" alt="feedbackModal" class="modal-image" />
          <div class="title">Оставьте свои контакты,</div>
          <div class="subtitle">
            мы свяжемся с Вами и запишем <br />
            на удобное для Вас время
          </div>
          <div class="inputs">
            <input class="input" type="text" placeholder="Ваше имя:" />
            <input class="input" type="text" placeholder="Ваш телефон:" />
          </div>
          <div class="controls">
            <button class="controls-btn" @click="handleSubmit">Отправить</button>
            <div class="consent">
              <input id="modal-consent" type="checkbox" class="consent-input" />
              <label for="modal-consent" class="consent-label">
                <span class="consent-box"></span>
                <span class="consent-text">
                  Я согласен с <a href="#">политикой конфиденциальности</a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

function handleClose() {
  emit('close')
}

function handleSubmit() {
  handleClose()
  console.log('handleSubmit')
}
</script>

<style scoped>
.modal-image {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 49%;
  aspect-ratio: 303/248;
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
  margin-top: 20px;
}

.inputs {
  display: flex;
  gap: 35px;
  margin-top: 40px;
  max-width: 650px;
}

.input {
  width: 100%;
  height: 75px;
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

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.modal-container {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.modal-content {
  border-radius: 50px;
  background: #eaf2fc;
  width: 100%;
  max-width: 1200px;
  min-height: 490px;
  padding: 60px;
  position: relative;
  overflow: hidden;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
