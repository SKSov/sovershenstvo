<template>
  <section class="doctors">
    <div class="container">
      <div class="doctors-header">
        <h2 class="doctors-title">Наши врачи</h2>
        <div class="doctors-nav">
          <button class="nav-btn" aria-label="Предыдущий" @click="scrollPrev">
            <DoctorsSliderIconsArrowLeft style="width: 41px; height: 41px" class="icon" />
          </button>
          <button class="nav-btn" aria-label="Следующий" @click="scrollNext">
            <DoctorsSliderIconsArrowRight style="width: 41px; height: 41px" class="icon" />
          </button>
        </div>
      </div>

      <ClientOnly>
        <div class="slider-wrap" :style="{ '--spv': currentSpv, '--gap': currentGap + 'px' }">
          <Swiper
            class="slider"
            :space-between="24"
            :slides-per-view="1.3"
            :grab-cursor="true"
            :speed="600"
            :modules="modules"
            :keyboard="{ enabled: true }"
            :mousewheel="{ forceToAxis: true, sensitivity: 1 }"
            :breakpoints="{
              0: { slidesPerView: 1.05, spaceBetween: 12 },
              768: { slidesPerView: 1.1, spaceBetween: 16 },
              1024: { slidesPerView: 1.2, spaceBetween: 20 },
              1280: { slidesPerView: 1.3, spaceBetween: 24 },
            }"
            :free-mode="{ enabled: true, momentum: true, sticky: true }"
            @swiper="onSwiper"
            @slide-change="updateEdgeState"
            @reach-end="updateEdgeState"
            @reach-beginning="updateEdgeState"
            @from-edge="updateEdgeState"
            @progress="onProgress"
            @resize="onResize"
            @breakpoint="onBreakpoint"
          >
            <SwiperSlide v-for="(doctor, index) in doctors" :key="index">
              <article class="card">
                <div class="photo">
                  <img :src="doctor.photo" :alt="doctor.name" loading="lazy" />
                </div>
                <div class="text-container">
                  <div class="name">Юрасов Николай Сергеевич</div>
                  <div class="about">
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                    несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                    начинающему оратору отточить навык публичных выступлений в домашних условиях.
                    При создании генератора мы использовали.
                  </div>
                  <div class="licenses-title">Сертификаты</div>
                  <div class="licenses">
                    <img src="/images/doctors-slider/licenses/1.png" alt="License" />
                    <img src="/images/doctors-slider/licenses/2.png" alt="License" />
                    <img src="/images/doctors-slider/licenses/3.png" alt="License" />
                  </div>
                  <div class="experience-title">Опыт</div>
                  <div class="experience-text">
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                    несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                    начинающему оратору отточить навык публичных выступлений в домашних условиях.
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
          <div class="fade-right" :class="{ hidden: isEnd }"></div>
        </div>
      </ClientOnly>

      <UIButton style="margin-top: 40px">Все специалисты</UIButton>
    </div>
  </section>
</template>

<script setup>
import { FreeMode, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'

const modules = [Keyboard, Mousewheel, FreeMode]

const doctors = Array.from({ length: 6 }, (_, i) => ({
  name: `Доктор №${i + 1}`,
  role: 'Стоматолог-терапевт',
  photo: `/images/doctors-slider/doctors/1.png`,
}))

let swiperInstance = null
const isEnd = ref(false)
const currentSpv = ref(1.5)
const currentGap = ref(24)

function onSwiper(instance) {
  swiperInstance = instance
  updateSpvFromInstance()
  updateGapFromInstance()
  updateEdgeState()
}

function updateEdgeState() {
  if (!swiperInstance) return
  isEnd.value = swiperInstance.isEnd
}

function updateSpvFromInstance() {
  if (!swiperInstance) return
  const spv =
    typeof swiperInstance.params.slidesPerView === 'number'
      ? swiperInstance.params.slidesPerView
      : 1.5
  currentSpv.value = spv
}

function onResize() {
  updateSpvFromInstance()
  updateGapFromInstance()
}

function onBreakpoint() {
  updateSpvFromInstance()
  updateGapFromInstance()
}

function scrollNext() {
  if (swiperInstance) swiperInstance.slideTo(swiperInstance.activeIndex + 1, 600)
}

function updateGapFromInstance() {
  if (!swiperInstance) return
  const isNumber = typeof swiperInstance.params.spaceBetween === 'number'
  const gap = isNumber ? swiperInstance.params.spaceBetween : 24
  currentGap.value = gap
}

function onProgress() {
  if (!swiperInstance) return
  // Hide fade near the very end so it doesn't cover last slide content
  isEnd.value = swiperInstance.isEnd || swiperInstance.progress > 0.985
}

function scrollPrev() {
  if (swiperInstance && swiperInstance.activeIndex > 0)
    swiperInstance.slideTo(swiperInstance.activeIndex - 1, 600)
}
</script>

<style scoped>
.doctors {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.doctors-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.doctors-nav {
  display: flex;
  gap: 10px;
}

.nav-btn {
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

.doctors-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.slider-wrap {
  margin-top: 40px;
  position: relative;
  --spv: 1.5;
  --gap: 24px;
}

.fade-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: calc(((100% - var(--gap)) / var(--spv)) * (var(--spv) - 1) + var(--gap));
  pointer-events: none;
  background: linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 5;
}

.fade-right.hidden {
  opacity: 0;
}

.slider {
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  position: relative;
  z-index: 1;
}

.card {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 1:1 image to text */
  overflow: hidden;
  gap: 20px;
}

.photo {
  width: 100%;
  height: fit-content;
  border-radius: 50px;
  overflow: hidden;
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%);
  min-width: 0;
}

.photo img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.text-container {
  height: fit-content;
  background: #fff;
  box-sizing: border-box;
  min-width: 0;
}

.name {
  color: #0079ff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 37.5px */
}

.about {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  margin-top: 20px;
}

.licenses-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 37.5px */
  margin-top: 20px;
}

.licenses {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.licenses img {
  display: block;
  object-fit: contain;
}

.experience-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 37.5px */
  margin-top: 20px;
}

.experience-text {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  margin-top: 20px;
}
</style>
