<template>
  <section class="strengths">
    <div class="container">
      <h2 class="strengths-title">
        Забота о вашей улыбке – <br />
        наша миссия
      </h2>
      <p class="strengths-subtitle">
        Мы не просто врачи, а надежные партнеры, <br />
        которым вы можете доверять, потому что:
      </p>
      <div class="strengths-cards">
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsInsurance />
          </div>
          <div class="content">
            <p class="card-title">
              Предоставляем гарантию <br />
              на все виды лечения
            </p>
            <div class="card-text">
              Стремимся не просто устранить проблему, а обеспечить вам здоровую и красивую улыбку на
              долгие годы
            </div>
          </div>
        </div>
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsCrown />
          </div>
          <div class="content">
            <p class="card-title">
              Всегда ставим ваши <br />
              интересы на первое место
            </p>
            <div class="card-text">
              и не навязываем ненужные процедуры Прозрачность и честность - основа наших отношений
            </div>
          </div>
        </div>
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsGears />
          </div>
          <div class="content">
            <p class="card-title">
              Инвестируем в самое <br />
              современное оборудование,
            </p>
            <div class="card-text">
              чтобы сделать диагностику точной, лечение эффективным и комфортным.
            </div>
          </div>
        </div>
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsCapa />
          </div>
          <div class="content">
            <p class="card-title">
              Разрабатываем <br />
              индивидуальный план лечения,
            </p>
            <div class="card-text">
              так как каждый пациент для нас - уникальная личность со своими потребностями и
              пожеланиями
            </div>
          </div>
        </div>
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsDental />
          </div>
          <div class="content">
            <p class="card-title">
              Внедряем в практику самые <br />
              современные методики лечения,
            </p>
            <div class="card-text">
              постоянно повышаем свою квалификацию, участвуем в международных конференциях
            </div>
          </div>
        </div>
        <div class="strength-card">
          <div class="card-icon">
            <AboutMissionIconsPeople />
          </div>
          <div class="content">
            <p class="card-title">
              Мы работаем <br />
              как единая команда,
            </p>
            <div class="card-text">
              поэтому всегда готовы ответить на ваши вопросы, объяснить все этапы лечения и
              поддержать вас на каждом шагу
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Strengths Section */
.strengths {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

/* Адаптивные отступы для секций */
@media (max-width: 1200px) {
  .strengths {
    padding: 70px 0;
  }
}

@media (max-width: 768px) {
  .strengths {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .strengths {
    padding: 50px 0;
  }
}

@media (max-width: 360px) {
  .strengths {
    padding: 40px 0;
  }
}

.strengths-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
}

.strengths-subtitle {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 37.5px */
  margin-bottom: 30px;
}

.strengths-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.strength-card {
  height: 240px;
  background: #e3f2fd;
  border-radius: 50px;
  padding: 45px 75px 45px 45px;
  display: flex;
  align-items: center;
  gap: 42px;
  transition: transform 0.3s ease;
}

.strength-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  flex-shrink: 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-title {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%; /* 22.5px */
}

.card-text {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
}
@media (max-width: 1200px) {
  .strengths-cards {
    grid-template-columns: 1fr;
  }
}
</style>
