<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Идеальная улыбка <br />начинается здесь</h1>
          <p class="hero-subtitle">
            <span class="subtitle-bold">Стоматологическая клиника <br />«Совершенство»</span>
            <span class="subtitle-regular">
              — 18 лет <br />
              профессионализма</span
            >
          </p>
          <button class="hero-btn">Записаться на прием</button>
        </div>
        <div class="hero-image">
          <img src="/images/heroBanner.png" alt="Идеальная улыбка" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%), #fff;
  border-radius: 50px;
  margin: 100px auto 100px auto;
  max-width: 1700px;
  /* overflow: hidden; */
  position: relative;
}

.hero-content {
  display: flex;
  align-items: flex-start;
  padding: 100px 50px;
  position: relative;
  z-index: 2;
}

/* Адаптив для hero-content */
@media (max-width: 1200px) {
  .hero-content {
    padding: 80px 40px;
  }

  .hero-title {
    font-size: 56px !important;
  }

  .hero-subtitle {
    font-size: 28px !important;
  }
}

@media (max-width: 950px) {
  .hero-content {
    padding: 60px 30px;
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 48px !important;
    margin-bottom: 25px;
  }

  .hero-subtitle {
    font-size: 24px !important;
    margin-bottom: 30px;
  }

  .hero-image {
    position: relative;
    width: 100%;
    height: 300px;
    margin-top: 30px;
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 50px 25px;
  }

  .hero-title {
    font-size: 42px !important;
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 22px !important;
    margin-bottom: 25px;
  }

  .hero-image {
    height: 250px;
    margin-top: 25px;
  }

  .hero-btn {
    padding: 12px 25px;
    font-size: 16px !important;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 35px 15px;
  }

  .hero-title {
    font-size: 32px !important;
    margin-bottom: 12px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 18px !important;
    margin-bottom: 18px;
    line-height: 1.2;
  }

  .hero-image {
    height: 180px;
    margin-top: 15px;
  }

  .hero-btn {
    padding: 8px 18px;
    font-size: 14px !important;
  }
}

/* Адаптив для hero блока - картинка под текстом */
@media (max-width: 600px) {
  .hero {
    background: none !important;
    border-radius: 0 !important;
    margin: 20px auto !important;
  }

  .hero-content {
    flex-direction: column !important;
    padding: 40px 20px !important;
    text-align: center !important;
    background: linear-gradient(90deg, #e3f2fd 0%, #fff3e0 100%) !important;
    border-radius: 30px !important;
    margin-bottom: 20px !important;
  }

  .hero-text {
    width: 100% !important;
    margin-bottom: 30px !important;
  }

  .hero-image {
    width: 100% !important;
    max-width: 400px !important;
    margin: 0 auto !important;
    order: 2 !important;
    height: auto !important;
    margin-top: 0 !important;
  }

  .hero-title {
    width: 100% !important;
    font-size: 42px !important;
    line-height: 1.1 !important;
    margin-bottom: 20px !important;
  }

  .hero-subtitle {
    width: 100% !important;
    font-size: 18px !important;
    line-height: 1.3 !important;
    margin-bottom: 25px !important;
  }

  .hero-btn {
    font-size: 16px !important;
    padding: 15px 30px !important;
  }
}

/* Специальный адаптив для экранов меньше 500px */
@media (max-width: 500px) {
  .hero {
    background: none !important;
    margin: 15px auto !important;
  }

  .hero-content {
    flex-direction: column !important;
    padding: 30px 15px !important;
    text-align: center !important;
    background: linear-gradient(90deg, #e3f2fd 0%, #fff3e0 100%) !important;
    border-radius: 20px !important;
    margin-bottom: 15px !important;
  }

  .hero-text {
    width: 100% !important;
    margin-bottom: 20px !important;
  }

  .hero-title {
    font-size: 28px !important;
    line-height: 1.2 !important;
    margin-bottom: 15px !important;
    white-space: normal !important;
    hyphens: auto !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    width: 100% !important;
  }

  .hero-subtitle {
    font-size: 14px !important;
    line-height: 1.4 !important;
    margin-bottom: 20px !important;
    white-space: normal !important;
    hyphens: auto !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
    width: 100% !important;
  }

  .hero-btn {
    font-size: 14px !important;
    padding: 12px 25px !important;
  }

  .hero-image {
    position: static !important;
    width: 100% !important;
    max-width: 280px !important;
    height: auto !important;
    margin: 20px auto 0 !important;
    order: 2 !important;
    display: block !important;
    background: none !important;
  }

  .hero-image img {
    width: 100% !important;
    height: auto !important;
    max-width: 280px !important;
    border-radius: 15px !important;
  }
}

@media (max-width: 400px) {
  .hero-content {
    padding: 25px 12px !important;
  }

  .hero-title {
    font-size: 24px !important;
    margin-bottom: 10px !important;
    line-height: 1.1 !important;
    width: 100% !important;
  }

  .hero-subtitle {
    font-size: 14px !important;
    margin-bottom: 15px !important;
    line-height: 1.2 !important;
    width: 100% !important;
  }

  .hero-image {
    height: 160px !important;
    margin-top: 12px !important;
    max-width: 250px !important;
  }

  .hero-btn {
    padding: 8px 20px !important;
    font-size: 13px !important;
  }
}

@media (max-width: 360px) {
  .hero-content {
    padding: 20px 10px !important;
  }

  .hero-title {
    font-size: 22px !important;
    margin-bottom: 8px !important;
    line-height: 1.1 !important;
  }

  .hero-subtitle {
    font-size: 13px !important;
    margin-bottom: 12px !important;
    line-height: 1.2 !important;
  }

  .hero-image {
    height: 140px !important;
    margin-top: 10px !important;
    max-width: 220px !important;
  }

  .hero-btn {
    padding: 6px 15px !important;
    font-size: 12px !important;
  }
}

@media (max-width: 280px) {
  .hero-content {
    padding: 15px 6px;
  }

  .hero-title {
    font-size: 20px !important;
    margin-bottom: 6px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 12px !important;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .hero-image {
    height: 120px;
    margin-top: 8px;
  }

  .hero-btn {
    padding: 4px 10px;
    font-size: 11px !important;
  }
}

@media (max-width: 240px) {
  .hero-content {
    padding: 12px 4px;
  }

  .hero-title {
    font-size: 18px !important       ;
    margin-bottom: 5px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 11px;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .hero-image {
    height: 100px;
    margin-top: 6px;
  }

  .hero-btn {
    padding: 3px 8px;
    font-size: 10px;
  }
}

@media (max-width: 375px) {
  .hero-content {
    padding: 30px 15px;
  }

  .hero-title {
    width: 80vw;
    font-size: 32px;
    margin-bottom: 15px;
    line-height: 1.1;
  }

  .hero-subtitle {
    width: 60vw;
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .hero-image {
    height: 180px;
    margin-top: 20px;
  }

  .hero-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 350px) {
  .hero-content {
    padding: 25px 12px;
  }

  .hero-title {
    font-size: 28px;
    margin-bottom: 12px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 14px;
    margin-bottom: 18px;
    line-height: 1.2;
  }

  .hero-image {
    height: 160px;
    margin-top: 15px;
  }

  .hero-btn {
    padding: 8px 18px;
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  .hero-content {
    padding: 20px 10px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 1.2;
  }

  .hero-image {
    height: 140px;
    margin-top: 12px;
  }

  .hero-btn {
    padding: 6px 15px;
    font-size: 12px;
  }
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 63px;
  line-height: 100%;
  color: #0079ff;
  margin-bottom: 30px;
  /* Правильный перенос слов по правилам русского языка */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  word-break: normal;
  overflow-wrap: break-word;
}

.hero-subtitle {
  font-family: Inter, sans-serif;
  font-size: 30px;
  line-height: 125%;
  color: #333;
  margin-bottom: 40px;
  /* Правильный перенос слов по правилам русского языка */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  word-break: normal;
  overflow-wrap: break-word;
}

.subtitle-bold {
  font-weight: 600;
}

.subtitle-regular {
  font-weight: 400;
}

.hero-btn {
  padding: 24px 39px;
  border-radius: 59px;
  background: #0079ff;
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

.hero-btn:hover {
  background: #0056cc;
}

.hero-image {
  position: absolute;
  right: 0;
  bottom: 0px;
  aspect-ratio: 1231/776;
  width: 70%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
