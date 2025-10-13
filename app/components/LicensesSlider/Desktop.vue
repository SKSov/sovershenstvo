<template>
  <section class="licenses">
    <div class="container">
      <div class="licenses-header">
        <h2 class="licenses-title">Сертификаты</h2>
        <div class="licenses-nav">
          <button class="nav-btn" aria-label="Предыдущий" @click="scrollPrev">
            <ArrowLeft style="width: 41px; height: 41px" class="icon" />
          </button>
          <button class="nav-btn" aria-label="Следующий" @click="scrollNext">
            <ArrowRight style="width: 41px; height: 41px" class="icon" />
          </button>
        </div>
      </div>

      <ClientOnly>
        <Swiper
          class="slider"
          :space-between="24"
          :slides-per-view="4.5"
          :grab-cursor="true"
          :speed="600"
          :modules="modules"
          :keyboard="{ enabled: true }"
          :mousewheel="{ forceToAxis: true, sensitivity: 1 }"
          :breakpoints="{
            0: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 4.5, spaceBetween: 24 },
          }"
          :free-mode="{ enabled: true, momentum: true, sticky: true }"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="(src, index) in images" :key="index">
            <article class="slide">
              <div class="image-wrap">
                <NuxtImg
                  :src="src"
                  quality="80"
                  alt="Сертификат"
                  class="slide-image"
                  loading="lazy"
                  :img-attrs="{ style: 'width:100%;height:100%;object-fit:cover;display:block' }"
                />
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { FreeMode, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import ArrowLeft from './Icons/arrowLeft.vue'
import ArrowRight from './Icons/arrowRight.vue'

const images = Array.from({ length: 10 }, (_, i) => `/images/licenses/${i + 1}.jpg`)

const modules = [Keyboard, Mousewheel, FreeMode]
let swiperInstance = null

function onSwiper(instance) {
  swiperInstance = instance
}

function scrollNext() {
  if (swiperInstance) swiperInstance.slideTo(swiperInstance.activeIndex + 1, 600)
}

function scrollPrev() {
  if (swiperInstance && swiperInstance.activeIndex > 0)
    swiperInstance.slideTo(swiperInstance.activeIndex - 1, 600)
}
</script>

<style scoped>
.licenses {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.licenses-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.licenses-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.licenses-nav {
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

.slider {
  margin-top: 40px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

.slide {
  width: 300px;
}

.image-wrap {
  width: 100%;
  aspect-ratio: 401 / 573;
  border-radius: 20px;
  overflow: hidden;
  background: #eaeaea;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .slide {
    flex-basis: calc(100% - 40px);
  }
}
</style>
