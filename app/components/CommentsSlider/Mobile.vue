<template>
  <section class="comments-mobile">
    <div class="container">
      <div class="header">
        <h2 class="title">Что говорят клиенты</h2>
        <div class="nav">
          <button class="nav-btn" aria-label="Предыдущий" @click="scrollPrev">
            <ArrowLeft class="icon" />
          </button>
          <button class="nav-btn" aria-label="Следующий" @click="scrollNext">
            <ArrowRight class="icon" />
          </button>
        </div>
      </div>

      <ClientOnly>
        <Swiper
          class="slider"
          :space-between="16"
          :slides-per-view="1.1"
          :grab-cursor="true"
          :speed="600"
          :modules="modules"
          :keyboard="{ enabled: true }"
          :mousewheel="{ forceToAxis: true, sensitivity: 1 }"
          :auto-height="true"
          :breakpoints="{
            0: { slidesPerView: 1.05, spaceBetween: 12 },
            480: { slidesPerView: 1.1, spaceBetween: 14 },
            640: { slidesPerView: 1.2, spaceBetween: 16 },
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
                <div class="avatar" />
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
import ArrowLeft from '@/components/CommentsSlider/Icons/arrowLeft.vue'
import ArrowRight from '@/components/CommentsSlider/Icons/arrowRight.vue'
import Quote from '@/components/CommentsSlider/Icons/quote.vue'
import Star from '@/components/CommentsSlider/Icons/star.vue'

const modules = [Keyboard, Mousewheel, FreeMode]
let swiperInstance = null

const comments = [
  {
    date: '09.04.2023',
    author: 'Иван Иванов',
    text: 'уже почти 2 месяца хожу сюда, но у Соколенко Юлии была на занятиях впервые, и я была очень удивлена,мне все так понравилась, была на зумбе у нее, все классно и песни и энергетика, потом на стречинге, блиин она так подготовилась, даже обдеялом накрыла🥹 спасибо Юлии большое, наполнила энергией 🫶🏻❤️ dsadsadas sadsadas sadsadsa dfdsfds',
  },
  {
    date: '09.04.2023',
    author: 'Петр Маралов',
    text: 'Была на лечении кариеса, все аккуратно и без боли. Подробно рассказали про дальнейший уход. Рекомендую друзьям и знакомым!',
  },
  {
    date: '09.04.2023',
    author: 'Сергей Кузнецов',
    text: 'Удаляли зуб мудрости — всё быстро и спокойно, на следующий день уже чувствовал себя нормально. Спасибо доктору!',
  },
]

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
.comments-mobile {
  padding: 60px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.title {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-btn {
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon {
  width: 41px;
  height: 41px;
}

.slider {
  margin-top: 20px;
  overflow: hidden;
}

.slide {
  padding: 20px;
  border-radius: 20px;
  background: #eaf2fc;
  display: flex;
  flex-direction: column;
}

.slide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.slide-date {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0.5;
}

.slide-stars {
  display: flex;
  gap: 4px;
}

.star {
  width: 16px;
  height: 16px;
}

.slide-body {
  margin-top: 16px;
}

.quote {
  width: 24px;
  height: 24px;
}

.slide-text {
  margin-top: 16px;
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.slide-user {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d9d9d9;
  flex-shrink: 0;
}

.user-name {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (min-width: 992px) {
  .comments-mobile {
    display: none;
  }
}
</style>
