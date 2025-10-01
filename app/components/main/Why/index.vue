<template>
  <section class="why">
    <div class="container">
      <h2 class="why-title">Почему выбирают нас</h2>
      <div class="grid">
        <div class="block">
          <MainWhyIconsPrice />
          <div class="title">Честные <br />цены</div>
          <div class="text">Прозрачное ценообразование и никаких скрытых платежей</div>
        </div>
        <div class="block">
          <MainWhyIconsTechnologies />
          <div class="title">Передовые <br />технологии</div>
          <div class="text">
            Точное лечение <br />с использованием дентального томографа PLANMECA <br />и 3D сканеров
          </div>
        </div>
        <div class="block">
          <MainWhyIconsComfort />
          <div class="title">Комфортная <br />атмосфера</div>
          <div class="text">
            Приветливый персонал, отсутствие очередей <br />и возможность посмотреть фильм во время
            лечения
          </div>
        </div>
        <div class="block">
          <MainWhyIconsBadge />
          <div class="title">Высококвалифи-<br />цированные врачи</div>
          <div class="text">
            Используем новейшие методики, участвуем в международных конференциях
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

.why-title {
  color: #1e1e1e;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.block {
  border-radius: 35px;
  background: #eaf2fc;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 37.5px */
  margin-top: 10px;
}

.text {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  max-width: 300px;
}
</style>
