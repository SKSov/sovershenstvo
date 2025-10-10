<template>
  <section class="unique">
    <div class="container">
      <h2 class="unique-title">Уникальные решения клиники</h2>
      <p class="unique-subtitle">
        Разработаны эксклюзивно для вашей <br />
        улыбки и здоровья <span class="bold">только в нашей клинике</span>
      </p>
      <div class="unique-cards">
        <div class="card">
          <img src="/images/unique/1.png" alt="Unique" />
          <div class="title">
            Эстетическое <br />
            выравнивание зубов
          </div>
          <div class="subtitle">
            Индивидуальные эстетичные <br />
            ортодонтические конструкции
          </div>
        </div>
        <div class="card">
          <img src="/images/unique/2.png" alt="Unique" />
          <div class="title">
            Безболезненная <br />
            имплантация
          </div>
          <div class="subtitle">
            «Бескровный» (малоинвазивный) метод <br />
            имплантации, преимущество которого <br />
            безболезненная реабилитация в короткие сроки
          </div>
        </div>
      </div>
      <div class="unique-button">
        <button class="unique-btn">Записаться на прием</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.unique {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.unique-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

@media (max-width: 768px) {
  .unique-title {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}

.unique-subtitle {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .unique-subtitle {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 16.25px */
    margin-top: 10px;
  }
}

.bold {
  font-weight: 600;
}

.unique-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .unique-cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
    margin-top: 20px;
  }
}

.card {
  border-radius: 50px;
  overflow: hidden;
  padding: 60px;
  position: relative;
  aspect-ratio: 830/462;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 11px;
}

@media (max-width: 768px) {
  .card {
    aspect-ratio: 280/205;
    padding: 20px;
    border-radius: 20px;
  }
}

.card .title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 37.5px */
}

@media (max-width: 768px) {
  .card .title {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 16.25px */
    max-width: 50%;
  }
}

.card .subtitle {
  position: relative;
  z-index: 2;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  min-height: 70px;
}

@media (max-width: 768px) {
  .card .subtitle {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 12.5px */
    min-height: auto;
  }
}

.card img {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (max-width: 768px) {
  .card img {
    object-fit: cover;
  }
}

.unique-card {
  border-radius: 50px;
  overflow: hidden;
}

.unique-button {
  margin-top: 40px;
  text-align: left;
}

@media (max-width: 768px) {
  .unique-button {
    margin-top: 20px;
  }
}

.unique-btn {
  padding: 18.5px 30px;
  background: #0079ff;
  border-radius: 45px;
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

@media (max-width: 768px) {
  .unique-btn {
    padding: 10px 17px;
    border-radius: 26.222px;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.unique-btn:hover {
  background: #0056cc;
}
</style>
