<template>
  <div class="relative flex items-center h-[700px] px-[100px] rounded-xl cont">
    <div class="w-full max-w-[615px] flex flex-col">
      <h1 class="text-mainBlue text-[48px] font-bold uppercase leading-[110%]">
        немецкие импланты с установкой всего за 18 000 ₽
      </h1>
      <p class="text-[#000] text-[30px] font-normal leading-[125%] mt-2">
        В 99% случаях гарантируем приживаемость имплантов
      </p>
      <UIButton size="md" class="mt-5">Записаться на прием</UIButton>
    </div>
    <img
      preload
      draggable="false"
      src="/images/hero/img.png"
      alt="hero"
      class="absolute max-w-[48%] w-full right-[8%] bottom-0"
      style="aspect-ratio: 754/789"
    />
  </div>
</template>

<style scoped>
.cont {
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%), #fff;
}
</style>
