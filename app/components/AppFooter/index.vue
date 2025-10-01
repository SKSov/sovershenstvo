<template>
  <section class="footer">
    <div class="container">
      <footer class="grid">
        <div class="content">
          <div class="title">Контакты</div>
          <div class="subtitle">Как нас найти</div>
          <div class="info">
            <div class="left">
              <p><AppFooterIconsInst /><span>@sovershenstvo</span></p>
              <p><AppFooterIconsTg /><span>@sovershenstvo</span></p>
              <p><AppFooterIconsCall /><span>+7(913) 766-81-15</span></p>
            </div>
            <div class="right">
              <p><AppFooterIconsCall /><span>25-00-02 | 95-10-49</span></p>
              <p><AppFooterIconsMail /><span>sovershenstvo@pochta.ru</span></p>
              <p>
                <AppFooterIconsLocation /><span
                  >г. Пенза <br />
                  ул. Терновского, 132 | ул. Глазунова, 1</span
                >
              </p>
            </div>
          </div>
          <div class="btns">
            <div class="btn g-map">
              <AppFooterIconsGoogleMaps style="width: 56px; height: 56px" />
              <p>
                Проложить <br />
                маршрут
              </p>
            </div>
            <div class="btn y-map">
              <AppFooterIconsYandexMap style="width: 36px; height: 44.5px" />
              <p>
                Проложить <br />
                маршрут
              </p>
            </div>
            <div class="btn two-map">
              <AppFooterIcons2Map style="width: 46px; height: 46px" />
              <p>
                Проложить <br />
                маршрут
              </p>
            </div>
          </div>
          <div class="line"></div>
          <div class="nav">
            <div>
              <img src="/images/footer-logo.png" alt="nav" />
            </div>
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
            <div class="col">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Пользовательское соглашение</a>
              <p>{{ new Date().getFullYear() }}. Все права защищены.</p>
            </div>
            <button class="footer-btn">Записаться на прием</button>
          </div>
        </div>
        <div class="map">
          <img src="/images/footer-map.png" alt="map" />
        </div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.footer {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 618fr 1042fr;
  gap: 20px;
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
}

.info {
  display: flex;
  gap: 33px;
  margin-top: 43px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.left p {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1e1e1e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
}

.right p {
  color: #1e1e1e;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
}

.btns {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  width: 166px;
  display: flex;
  align-items: center;
  color: #1e1e1e;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 14px;
  background: #fff;
  height: 62px;
  gap: 8px;
  padding-right: 21px;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.btn.g-map {
  border: 1px solid #4285f5;
}

.btn.y-map {
  border: 1px solid #f43;
}

.btn.two-map {
  border: 1px solid #99ca3b;
}

.line {
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin: 15px 0;
}

.nav {
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 20px;
}

.links a {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 20px */
  text-decoration: none;
}

.policies {
  padding-right: 33px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.col * {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  text-decoration: none;
}

.footer-btn {
  height: 55px;
  padding: 18.5px 30px;
  background: #0079ff;
  border-radius: 45px;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: background 0.3s;
}

.footer-btn:hover {
  background: #0056cc;
}

.map {
  display: flex;
  align-items: center;
  justify-content: center;
}

.map img {
  width: 100%;
  display: block;
}
</style>
