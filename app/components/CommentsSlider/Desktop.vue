<template>
  <section class="comments">
    <div class="container">
      <div class="comments-header">
        <h2 class="comments-title">Что говорят клиенты</h2>
        <div class="comments-nav">
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
          :slides-per-view="3.2"
          :grab-cursor="true"
          :speed="600"
          :modules="modules"
          :keyboard="{ enabled: true }"
          :mousewheel="{ forceToAxis: true, sensitivity: 1 }"
          :breakpoints="{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 2.4, spaceBetween: 22 },
            1280: { slidesPerView: 3.2, spaceBetween: 24 },
          }"
          :free-mode="{ enabled: true, momentum: true, sticky: true }"
          @swiper="onSwiper"
        >
          <SwiperSlide v-for="(item, index) in comments" :key="index">
            <article class="slide">
              <div class="slide-top">
                <div class="slide-date">{{ item.date }}</div>
                <div class="slide-stars">
                  <Star v-for="n in 5" :key="n" class="star" />
                </div>
              </div>
              <div class="slide-body">
                <Quote class="quote" />
                <p class="slide-text">{{ item.text }}</p>
              </div>
              <div class="slide-user">
                <UserIcon class="avatar" />
                <div class="user-name">{{ item.author }}</div>
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
import Quote from './Icons/quote.vue'
import Star from './Icons/star.vue'
import UserIcon from './Icons/user.vue'

defineProps({
  comments: {
    type: Array,
    required: true,
  },
})

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
.comments {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.comments-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.comments-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.comments-nav {
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
  width: 413px;
  padding: 30px;
  min-height: 370px;
  border-radius: 35px;
  background: #eaf2fc;
  display: flex;
  flex-direction: column;
  user-select: none;
  -webkit-user-select: none;
}

.slide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide-date {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}

.slide-stars {
  display: flex;
  gap: 4px;
  user-select: none;
}

.star {
  width: 19px;
  height: 19px;
}

.slide-body {
  margin-top: 20px;
}

.quote {
  width: 30px;
  height: 30px;
}

.slide-text {
  margin-top: 28px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 21px */
  margin-bottom: 16px;
  white-space: pre-line;
}

.slide-user {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.avatar {
  width: 50px;
  height: 50px;
  color: #bdbdbd;
  flex-shrink: 0;
}

.user-name {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 768px) {
  .slide {
    flex-basis: calc(100% - 40px);
    height: auto;
    min-height: 280px;
  }
}
</style>
