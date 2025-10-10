<template>
  <section class="footer-mobile">
    <div class="container">
      <footer class="wrap">
        <div class="head">
          <div class="title">Контакты</div>
          <div class="subtitle">Как нас найти</div>
        </div>

        <div class="map-image"><img src="/images/footer-map.png" alt="map" /></div>

        <div class="contacts">
          <div class="col">
            <div class="row">
              <AppFooterIconsCall style="flex-shrink: 0" /><span>25-00-02 | 95-10-49</span>
            </div>
            <div class="row">
              <AppFooterIconsMail style="flex-shrink: 0" /><span>sovershenstvo@pochta.ru</span>
            </div>
            <div class="row address">
              <AppFooterIconsLocation style="flex-shrink: 0" /><span
                >г. Пенза<br />ул. Терновского, 132 | ул. Глазунова, 1</span
              >
            </div>
          </div>
          <div class="col">
            <div class="row">
              <AppFooterIconsInst style="flex-shrink: 0" /><span>@sovershenstvo</span>
            </div>
            <div class="row">
              <AppFooterIconsTg style="flex-shrink: 0" /><span>@sovershenstvo</span>
            </div>
            <div class="row">
              <AppFooterIconsCall style="flex-shrink: 0" /><span>+7(913) 766-81-15</span>
            </div>
          </div>
        </div>

        <div class="maps">
          <button class="map-btn g-map">
            <AppFooterIconsGoogleMaps style="width: 30px; height: 30px" />
            <p>Проложить<br />маршрут</p>
          </button>
          <button class="map-btn y-map">
            <AppFooterIconsYandexMap style="width: 30px; height: 30px" />
            <p>Проложить<br />маршрут</p>
          </button>
          <button class="map-btn two-map">
            <AppFooterIcons2Map style="width: 30px; height: 30px" />
            <p>Проложить<br />маршрут</p>
          </button>
        </div>

        <div class="line"></div>

        <div class="nav">
          <img src="/images/footer-logo.png" alt="logo" class="logo" />
          <div class="links">
            <a href="#">Главная</a>
            <a href="#">Услуги</a>
            <a href="#">О нас</a>
            <a href="#">Стоимость</a>
            <a href="#">Специалисты</a>
            <a href="#">Акции</a>
            <a href="#">Отзывы</a>
          </div>
        </div>

        <div class="line"></div>

        <div class="policies">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
          <p>{{ new Date().getFullYear() }}. Все права защищены.</p>
        </div>

        <!-- <button class="cta">Записаться на прием</button> -->
      </footer>
    </div>
  </section>
</template>

<style scoped>
.footer-mobile {
  padding: 60px 0 20px;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(24px, 6.5vw, 30px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.subtitle {
  margin-top: 4px;
  color: #000;
  font-family: Inter, sans-serif;
  font-size: clamp(14px, 4.2vw, 18px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;
  margin-top: 12px;
}

.row {
  display: inline-flex;
  gap: 8px;
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.8vw, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
}

.col {
  display: grid;
  gap: 10px;
}

.address span {
  display: inline-block;
}

.maps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 8px;
}

.map-btn {
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 5px;
  padding: 10px 4px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e5e5e5;
}

.map-btn p {
  margin: 0;
  color: #1e1e1e;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.1;
}

.map-btn.g-map {
  border-color: #4285f5;
}
.map-btn.y-map {
  border-color: #f43;
}
.map-btn.two-map {
  border-color: #99ca3b;
}

.map-image {
  border-radius: 20px;
  overflow: hidden;
}

.map-image img {
  width: 100%;
  display: block;
}

.nav {
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 16px;
}

.logo {
  width: clamp(60px, 24vw, 90px);
  height: auto;
}

.links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 16px;
}

.links a {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.6vw, 14px);
  text-decoration: none;
}

.policies {
  display: grid;
  gap: 8px;
}

.policies a,
.policies p {
  color: #1e1e1e;
  font-family: Inter, sans-serif;
  font-size: clamp(10px, 3.2vw, 12px);
  text-decoration: none;
  line-height: 1.2;
}

.cta {
  margin-top: 8px;
  padding: 12px 18px;
  background: #0079ff;
  border-radius: 26px;
  border: none;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: clamp(12px, 3.6vw, 14px);
  font-weight: 500;
  line-height: normal;
}

.line {
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 10px 0;
}

@media (min-width: 769px) {
  .footer-mobile {
    display: none;
  }
}
</style>
