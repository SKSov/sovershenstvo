<script setup lang="ts">
import { navigateTo } from 'nuxt/app'
</script>

<template>
  <section class="details">
    <div class="container">
      <h2 class="details-title">
        Совершенство — <br />
        ваша стоматология
      </h2>

      <div class="block">
        <img src="/images/details/1.png" alt="Details" />
        <div class="info">
          <div class="list">
            <div class="item">
              <MainDetailsIconsTooth />
              <p>Более 18 лет <br />мы дарим улыбки</p>
            </div>
            <div class="item">
              <MainDetailsIconsHappy />
              <p>
                250 000+ <br />
                довольных пациентов
              </p>
            </div>
            <div class="item">
              <MainDetailsIconsAchievement />
              <p>
                Признание <br />
                на «Продокторов»
              </p>
            </div>
          </div>
          <button class="details-btn" @click="navigateTo('/about')">Узнать подробнее</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.details {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.details-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.block {
  border-radius: 50px;
  margin-top: 40px;
  aspect-ratio: 1680/700;
  position: relative;
}

.block img {
  width: 100%;
  height: 100%;
}

.info {
  position: absolute;
  top: 50%;
  right: 60px;
  transform: translateY(-50%);
  padding: 60px;
  border-radius: 50px;
  background: #0079ff;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  width: 491px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.item {
  display: flex;
  align-items: center;
  gap: 35px;
}

.details-btn {
  padding: 18.5px 30px;
  background: #fff;
  border-radius: 45px;
  border: none;
  color: #0079ff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 40px;
}

.details-btn:hover {
  background: #e6e6e6;
}
</style>
