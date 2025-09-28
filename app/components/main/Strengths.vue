<template>
  <section class="strengths">
    <div class="container">
      <h2 class="strengths-title">
        Наши <br />
        сильные стороны
      </h2>
      <div class="strengths-cards">
        <div class="strength-card">
          <div class="card-icon">
            <img src="/icons/personal-plan.svg" alt="Персональный план" />
          </div>
          <div class="card-text">Персональный план лечения</div>
        </div>

        <div class="strength-card">
          <div class="card-icon">
            <img src="/icons/garant.svg" alt="Гарантия" />
          </div>
          <div class="card-text">Предоставляем гарантию на все виды лечения</div>
        </div>

        <div class="strength-card">
          <div class="card-icon">
            <img src="/icons/price.svg" alt="Цена" />
          </div>
          <div class="card-text">Невысокая цена при отличном качестве</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Strengths Section */
.strengths {
  padding: 80px 0;
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
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 36px;
  color: #333;
  margin-bottom: 50px;
  line-height: 1.2;
}

.strengths-cards {
  display: flex;
  gap: 30px;
  justify-content: space-between;
}

.strength-card {
  height: 200px;
  flex: 1;
  background: #e3f2fd;
  border-radius: 50px;
  padding: 30px 25px;
  padding-right: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
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

.card-text {
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 125%;
  color: #333;
}
@media (max-width: 1200px) {
  .strengths-cards {
    flex-direction: column;
  }
}
</style>
