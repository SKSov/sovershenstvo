<template>
  <header class="header">
    <div class="header-top"></div>
    <div class="header-main">
      <div class="header-content">
        <div class="header-separator"></div>
        <div class="header-logo">
          <NuxtLink to="/">
            <img src="/images/header-logo.png" alt="Логотип" />
          </NuxtLink>
        </div>

        <div class="header-info">
          <div class="header-schedule">
            <div class="info-label">Режим работы</div>
            <div class="info-content">
              <AppHeaderIconsTimer />
              <span class="gray">Пн-Пт:</span> 9:00 - 20:00
              <div class="separator"></div>
              <span class="gray">Сб:</span> 9:00 - 19:00
            </div>
          </div>

          <div class="header-phone">
            <div class="info-label">Телефон</div>
            <div class="info-content">
              <AppHeaderIconsPhone />
              <span class="gray">8 (383) </span>25-00-02
              <div class="separator"></div>
              <span class="gray">8 (383) </span>95-10-49
            </div>
          </div>

          <div class="header-whatsapp">
            <AppHeaderIconsWhatsapp />
            <span>Написать в Whatsapp</span>
          </div>
        </div>

        <button class="header-call-btn" @click="openModal">Заказать звонок</button>

        <button id="burgerMenu" class="universal-burger-menu">
          <div class="universal-burger-line"></div>
          <div class="universal-burger-line"></div>
          <div class="universal-burger-line"></div>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <div id="mobileMenu" class="universal-mobile-menu">
    <div class="universal-mobile-menu-content">
      <!-- Контактная информация -->
      <div class="mobile-contact-info">
        <!-- Режим работы -->
        <div class="mobile-schedule">
          <h3 class="mobile-section-title">Режим работы</h3>
          <div class="mobile-schedule-content">
            <AppHeaderIconsTimer />
            <div class="mobile-schedule-text">
              <span class="mobile-schedule-day">Пн-Пт:</span>
              <span class="mobile-schedule-time">9:00 - 20:00</span>
              <span class="mobile-schedule-day">Сб:</span>
              <span class="mobile-schedule-time">9:00 - 19:00</span>
            </div>
          </div>
        </div>

        <!-- Телефон -->
        <div class="mobile-phone">
          <h3 class="mobile-section-title">Телефон</h3>
          <div class="mobile-phone-content">
            <AppHeaderIconsPhone />
            <div class="mobile-phone-numbers">
              <span class="mobile-phone-number">8 (383) 25-00-02</span>
              <div class="mobile-phone-separator"></div>
              <span class="mobile-phone-number">8 (383) 95-10-49</span>
            </div>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="mobile-whatsapp">
          <AppHeaderIconsWhatsapp />
        </div>
      </div>

      <!-- Кнопка заказать звонок -->
      <button class="mobile-call-btn">Заказать звонок</button>

      <!-- Навигационное меню -->
      <nav class="mobile-navigation">
        <NuxtLink to="/about" class="mobile-nav-link">О нас</NuxtLink>
        <NuxtLink to="/offers/therapy" class="mobile-nav-link">Услуги</NuxtLink>
        <NuxtLink to="/pricing" class="mobile-nav-link">Стоимость услуг</NuxtLink>
        <NuxtLink to="/doctors" class="mobile-nav-link">Специалисты</NuxtLink>
        <NuxtLink to="/promotions" class="mobile-nav-link">Акции</NuxtLink>
        <NuxtLink to="/reviews" class="mobile-nav-link">Отзывы</NuxtLink>
      </nav>

      <!-- Меню режима разработчика -->
      <div class="mobile-dev-menu">
        <h3 class="mobile-dev-title">Режим разработчика</h3>
        <div class="mobile-dev-links">
          <a href="#" class="mobile-dev-link" onclick="toggleDevMode()"
            >Включить режим разработчика</a
          >
          <a href="#" class="mobile-dev-link" onclick="showDevTools()">Инструменты разработчика</a>
          <a href="#" class="mobile-dev-link" onclick="clearCache()">Очистить кэш</a>
          <a href="#" class="mobile-dev-link" onclick="reloadPage()">Перезагрузить страницу</a>
        </div>
      </div>
    </div>
  </div>

  <nav class="navigation">
    <div class="container">
      <div class="nav-menu">
        <NuxtLink to="/about" class="nav-link">О нас</NuxtLink>
        <div class="nav-separator"></div>
        <NuxtLink to="/offers/therapy" class="nav-link">Услуги</NuxtLink>
        <div class="nav-separator"></div>
        <NuxtLink to="/pricing" class="nav-link">Стоимость услуг</NuxtLink>
        <div class="nav-separator"></div>
        <NuxtLink to="/doctors" class="nav-link">Специалисты</NuxtLink>
        <div class="nav-separator"></div>
        <NuxtLink to="/promotions" class="nav-link">Акции</NuxtLink>
        <div class="nav-separator"></div>
        <NuxtLink to="/reviews" class="nav-link">Отзывы</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { open } = useFeedbackModal()

function openModal() {
  open()
}
</script>

<style scoped>
/* Header */
.header {
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.header:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header-top {
  height: 4px;
  background: #0079ff;
}

.header-content {
  max-width: 1640px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 40px;
  padding: 20px 30px 20px 30px;
  position: relative;
}

.header-separator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 1px;
  background: #ddd;
}

.header-logo img {
  /* height: 110px; */
  /* width: auto; */
  transition: transform 0.3s ease;
}

.header-logo:hover img {
  transform: scale(1.05);
}

.header-info {
  display: flex;
  align-items: flex-end;
  gap: 60px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
}

.header-schedule,
.header-phone {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
}

.header-whatsapp {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
}

.header-whatsapp:hover {
  color: #25d366;
  transform: translateY(-2px);
}

.info-label {
  color: #878787;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.info-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-bold {
  font-weight: 700;
  color: #333;
}

.header-search {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input input {
  width: 220px;
  padding: 12px 12px 12px 40px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  color: #333;
  background: transparent;
  text-align: center;
}

.search-input input::placeholder {
  color: #666;
  text-align: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  width: 28px;
  height: 28px;
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #e5e5e5;
}

.search-btn img {
  width: 16px;
  height: 16px;
}

.header-call-btn {
  padding: 15px 30px;
  background: #0079ff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  margin-top: 15px;
}

.header-call-btn:hover {
  background: #0056cc;
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(0, 121, 255, 0.3);
}

/* ============ BURGER MENU STYLES (ПЕРЕМЕЩЕНЫ В burger-menu.css) ============ */

/* Альтернативный стиль для лучшей видимости на любом фоне */
.burger-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.burger-menu:hover::before {
  opacity: 1;
}

/* Альтернативный темный бургер для светлых фонов */
/* ============ СТАРЫЕ СТИЛИ БУРГЕРА УДАЛЕНЫ (ПЕРЕМЕЩЕНЫ В burger-menu.css) ============ */

/* ============ МОБИЛЬНОЕ МЕНЮ С УЛУЧШЕННЫМИ АНИМАЦИЯМИ ============ */
.burger-menu {
  display: none !important;
  flex-direction: column !important;
  cursor: pointer !important;
  padding: 10px !important;
  background: transparent !important;
  border: none !important;
  z-index: 1000 !important;
  position: relative !important;
  width: 40px !important;
  height: 40px !important;
  justify-content: center !important;
  align-items: center !important;
  transition: transform 0.3s ease !important;
}

.burger-menu:hover {
  transform: scale(1.1);
}

.burger-line {
  width: 25px !important;
  height: 3px !important;
  background: #fff !important;
  margin: 3px 0 !important;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
  border-radius: 2px !important;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3) !important;
}

.burger-menu.active .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.burger-menu.active .burger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.burger-menu.active .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 121, 255, 0.95) !important;
  backdrop-filter: blur(10px) !important;
  z-index: 999 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  transform: translateX(-100%) !important;
  opacity: 0 !important;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
  padding: 100px 30px 30px !important;
}

.mobile-menu.active {
  transform: translateX(0) !important;
  opacity: 1 !important;
}

.mobile-menu-content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 30px !important;
  width: 100% !important;
  max-width: 400px !important;
  text-align: center !important;
}

.mobile-menu .header-nav {
  flex-direction: column !important;
  gap: 25px !important;
}

.mobile-menu .nav-link {
  color: #fff !important;
  font-size: 20px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  padding: 15px 0 !important;
  border-bottom: 2px solid transparent !important;
  transition: all 0.3s ease !important;
  transform: translateY(20px) !important;
  opacity: 0 !important;
}

.mobile-menu.active .nav-link {
  transform: translateY(0) !important;
  opacity: 1 !important;
}

.mobile-menu .nav-link:nth-child(1) {
  transition-delay: 0.1s;
}
.mobile-menu .nav-link:nth-child(2) {
  transition-delay: 0.2s;
}
.mobile-menu .nav-link:nth-child(3) {
  transition-delay: 0.3s;
}
.mobile-menu .nav-link:nth-child(4) {
  transition-delay: 0.4s;
}
.mobile-menu .nav-link:nth-child(5) {
  transition-delay: 0.5s;
}

.mobile-menu .nav-link:hover {
  border-bottom-color: #fff !important;
  transform: scale(1.05) !important;
}

.mobile-menu .header-call-btn {
  background: #fff !important;
  color: #0079ff !important;
  padding: 15px 30px !important;
  font-size: 16px !important;
  border-radius: 25px !important;
  margin-top: 20px !important;
  transition: all 0.3s ease !important;
  transform: translateY(20px) !important;
  opacity: 0 !important;
}

.mobile-menu.active .header-call-btn {
  transform: translateY(0) !important;
  opacity: 1 !important;
  transition-delay: 0.6s !important;
}

.mobile-menu .header-call-btn:hover {
  background: #f0f0f0 !important;
  transform: scale(1.05) !important;
}

/* Контактная информация */
.mobile-contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.mobile-section-title {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  margin-bottom: 15px;
}

/* Режим работы */
.mobile-schedule-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.mobile-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  filter: brightness(0) invert(1);
}

.mobile-schedule-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-schedule-day {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}

.mobile-schedule-time {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ccc;
  margin-bottom: 8px;
}

/* Телефон */
.mobile-phone-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.mobile-phone-numbers {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-phone-number {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}

.mobile-phone-separator {
  width: 1px;
  height: 12px;
  background: #666;
  margin: 4px 0;
}

/* WhatsApp */
.mobile-whatsapp {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.mobile-whatsapp-icon {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}

/* Кнопка заказать звонок */
.mobile-call-btn {
  width: 100%;
  padding: 15px 20px;
  background: #0079ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.mobile-call-btn:hover {
  background: #0056cc;
}

/* Навигационное меню */
.mobile-navigation {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-nav-link {
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #555;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #0079ff;
}

/* Меню режима разработчика */
.mobile-dev-menu {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #555;
}

.mobile-dev-title {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #0079ff;
  margin-bottom: 15px;
}

.mobile-dev-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-dev-link {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ccc;
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.3s ease;
}

.mobile-dev-link:hover {
  color: #0079ff;
}

.mobile-nav-link {
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 15px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: #0079ff;
  color: white;
}

/* Navigation */
.navigation {
  background: #fff;
  padding: 15px 0;
  position: relative;
}

.navigation .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #333;
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-link:hover {
  background: #f5f5f5;
}

.nav-link.active {
  color: #0079ff;
  background: #f0f8ff;
  border-bottom: 2px solid #0079ff;
}

.nav-separator {
  width: 1px;
  height: 20px;
  background: #e5e5e5;
}

.gray {
  color: #878787;
}
</style>

<style scoped>
/* ============ УНИВЕРСАЛЬНЫЙ БУРГЕР-МЕНЮ ============ */

/* Основной контейнер бургера */
.universal-burger-menu {
  display: none !important;
  flex-direction: column !important;
  cursor: pointer !important;
  padding: 5px !important;
  background: transparent !important;
  border: none !important;
  z-index: 9999 !important;
  position: relative !important;
  width: 35px !important;
  height: 35px !important;
  justify-content: center !important;
  align-items: center !important;
  /* Принудительно убираем любые другие стили */
  background-image: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  /* Дополнительные стили для отладки */
  min-width: 35px !important;
  min-height: 35px !important;
  max-width: 35px !important;
  max-height: 35px !important;
}

/* Линии бургера */
.universal-burger-line {
  width: 25px !important;
  height: 3px !important;
  background: #fff !important;
  margin: 3px 0 !important;
  transition: all 0.3s ease !important;
  border-radius: 2px !important;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3) !important;
  display: block !important;
  /* Принудительно убираем любые другие стили */
  opacity: 1 !important;
  visibility: visible !important;
  position: relative !important;
  z-index: 10000 !important; /* Максимальный z-index */
  /* Дополнительные стили для отладки */
  min-width: 25px !important;
  min-height: 3px !important;
  max-width: 25px !important;
  max-height: 3px !important;
}

/* Темный бургер для светлых фонов */
.universal-burger-menu.dark {
  background: rgba(255, 255, 255, 0.9) !important;
}

.universal-burger-menu.dark .universal-burger-line {
  background: #333 !important;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.3) !important;
}

/* Анимация при активации */
.universal-burger-menu.active .universal-burger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px) !important;
}

.universal-burger-menu.active .universal-burger-line:nth-child(2) {
  opacity: 0 !important;
}

.universal-burger-menu.active .universal-burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px) !important;
}

/* Мобильное меню */
.universal-mobile-menu {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100vh !important;
  background: rgba(0, 0, 0, 0.8) !important;
  z-index: 9998 !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transition: all 0.3s ease !important;
  /* Принудительно убираем любые другие стили */
  display: block !important;
  transform: none !important;
}

.universal-mobile-menu.active {
  opacity: 1 !important;
  visibility: visible !important;
}

/* Контент мобильного меню */
.universal-mobile-menu-content {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  width: 80% !important;
  max-width: 400px !important;
  height: 100% !important;
  background: #333 !important;
  padding: 40px 30px !important;
  transform: translateX(100%) !important;
  transition: transform 0.3s ease !important;
  overflow-y: auto !important;
  color: #fff !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 30px !important;
  z-index: 9999 !important;
}

.universal-mobile-menu.active .universal-mobile-menu-content {
  transform: translateX(0) !important;
}
</style>
