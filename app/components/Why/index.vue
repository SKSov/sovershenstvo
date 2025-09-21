<template>
  <h2 class="text-[#1E1E1E] text-[48px] font-bold uppercase leading-[100%]">
    Почему <br />
    выбирают нас
  </h2>
  <div class="grid grid-cols-4 gap-[15px] mt-10">
    <div class="flex flex-col gap-[10px] p-[30px] rounded-xl cont">
      <WhyIconsPrice />
      <p class="text-[#000] text-[18px] font-semibold leading-[125%]">Честные цены</p>
      <p class="text-[#000] text-[18px] font-normal leading-[125%]">
        Прозрачное ценообразование и никаких скрытых платежей
      </p>
    </div>
    <div class="flex flex-col gap-[10px] p-[30px] rounded-xl cont">
      <WhyIconsTechnologies />
      <p class="text-[#000] text-[18px] font-semibold leading-[125%]">Передовые технологии</p>
      <p class="text-[#000] text-[18px] font-normal leading-[125%]">
        Лечение с применением томографа PLANMECA и 3D сканеров
      </p>
    </div>
    <div class="flex flex-col gap-[10px] p-[30px] rounded-xl cont">
      <WhyIconsComfort />
      <p class="text-[#000] text-[18px] font-semibold leading-[125%]">Комфортная атмосфера</p>
      <p class="text-[#000] text-[18px] font-normal leading-[125%]">
        Приветливый персонал, без очередей, можно смотреть фильм во время лечения
      </p>
    </div>
    <div class="flex flex-col gap-[10px] p-[30px] rounded-xl cont">
      <WhyIconsCategory />
      <p class="text-[#000] text-[18px] font-semibold leading-[125%]">Врачи высшей категории</p>
      <p class="text-[#000] text-[18px] font-normal leading-[125%]">
        Новейшие методики, участвуем в международных конференциях
      </p>
    </div>
  </div>
</template>

<style scoped>
.cont {
  background: linear-gradient(250deg, #faf1ed 0.15%, #eaf2fc 104.5%), #eaf2fc;
}
</style>
