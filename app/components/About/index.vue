<template>
  <h2 class="text-[#1E1E1E] text-[48px] font-bold uppercase leading-[100%]">
    Совершенство <br />
    — ваша стоматология
  </h2>
  <div class="grid grid-cols-3 gap-[15px] mt-10">
    <div class="flex justify-between rounded-xl bg-[#FFF5F0] px-[25px] py-[30px]">
      <div class="flex flex-col">
        <p class="text-[#1E1E1E] text-[64px] font-bold uppercase leading-[100%]">18+</p>
        <p class="text-[#000] text-[18px] font-normal leading-[100%]">лет мы дарим улыбки</p>
      </div>
      <AboutTick />
    </div>
    <div class="flex justify-between rounded-xl bg-[#FFF5F0] px-[25px] py-[30px]">
      <div class="flex flex-col">
        <p class="text-[#1E1E1E] text-[64px] font-bold uppercase leading-[100%]">4000+</p>
        <p class="text-[#000] text-[18px] font-normal leading-[100%]">довольных пациентов</p>
      </div>
      <AboutTick />
    </div>
    <div class="flex justify-between rounded-xl bg-[#FFF5F0] px-[25px] py-[30px]">
      <div class="flex flex-col">
        <p class="text-[#1E1E1E] text-[64px] font-bold uppercase leading-[100%]">8000+</p>
        <p class="text-[#000] text-[18px] font-normal leading-[100%]">установленных имплантов</p>
      </div>
      <AboutTick />
    </div>
  </div>

  <img
    src="/images/about/img.png"
    draggable="false"
    alt="about"
    class="mt-3 rounded-xl"
    style="aspect-ratio: 1440/254"
  />

  <UIButton class="mt-10" variant="secondary">Записаться на прием</UIButton>
</template>
