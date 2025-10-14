<template>
  <section class="text-block">
    <div class="container">
      <div class="grid">
        <div class="block">
          <p>
            Восстановите утраченные зубы на долгие годы с помощью современной имплантации. Это
            наиболее физиологичный и надежный способ вернуть не только эстетику улыбки, но и
            полноценную функцию жевания.
          </p>

          <h3>Почему имплантация?</h3>
          <p>
            Имплант — это титановый «корень», который вживляется в кость. На него фиксируется
            коронка, неотличимая от натурального зуба. Такая конструкция долговечна, предотвращает
            убыль костной ткани и не требует обточки соседних зубов.
          </p>
        </div>
        <div class="block">
          <h3>Ключевые этапы лечения</h3>
          <ul>
            <li>- Консультация врача</li>
            <li>- Аппаратная диагностика</li>
            <li>- Санация полости рта</li>
            <li>- Остеопластика</li>
            <li>- Хирургический этап</li>
            <li>- Ортопедический этап</li>
          </ul>
          <p>Результат — новая улыбка на десятилетия.</p>
          <p>
            Имплантация позволяет навсегда забыть о недостатке зубов. Вы сможете свободно улыбаться,
            есть любую пищу и жить полной жизнью.
          </p>
          <p>
            Запишитесь на консультацию, и наши хирурги-имплантологи составят для вас персональный
            план лечения.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-block {
  padding: 100px 0;
  background: #fff;
  max-width: 1700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .text-block {
    padding: 0;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

.block {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.block h3 {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 125%; /* 30px */
}

@media (max-width: 768px) {
  .block {
    color: #000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 125%; /* 12.5px */
  }
}
</style>
