<template>
  <div class="relative px-[100px] flex items-center h-[562px] rounded-xl cont">
    <div class="flex flex-col gap-5 relative z-20">
      <h2 class="text-[#0079FF] text-[48px] font-bold uppercase leading-[100%]">
        Даем сразу <br />
        две гарантии
      </h2>
      <div class="flex items-center gap-5">
        <GuaranteesTick />
        <p class="text-[#1E1E1E] text-[28px] font-normal leading-[125%] w-full max-w-[480px]">
          Гарантия на положительный результат лечения
        </p>
      </div>
      <div class="flex items-center gap-5 mt-[-20px]">
        <GuaranteesTick />
        <p class="text-[#1E1E1E] text-[28px] font-normal leading-[125%] w-full max-w-[480px]">
          2 года гарантии на фиксацию коронки
        </p>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="624"
      height="562"
      viewBox="0 0 624 562"
      fill="none"
      class="absolute top-0 right-[18%]"
      style="aspect-ratio: 624/562"
    >
      <path d="M342.5 0H624L282 562H0.5L342.5 0Z" fill="#0079FF" />
    </svg>
    <img
      src="/images/guarantees/img.png"
      alt="garantees"
      class="absolute max-w-[70%] w-full right-0 bottom-0"
      style="aspect-ratio: 1134/635"
    />
  </div>
</template>

<style scoped>
.cont {
  background: linear-gradient(270deg, #faf1ed 0%, #eaf2fc 100%), #fff;
}
</style>
