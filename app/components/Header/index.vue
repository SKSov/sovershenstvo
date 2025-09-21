<template>
  <header class="max-w-[1440px] mx-auto py-5 px-8 flex items-center justify-between">
    <div class="flex items-center gap-10">
      <img src="/images/header/logo.png" alt="logo" class="w-18 h-16 shrink-0" />
      <div class="flex items-center gap-16">
        <!-- contact item -->
        <div class="flex flex-col gap-[6px] contact-item">
          <p class="text-[#878787]">Режим работы</p>
          <div class="flex items-end gap-[10px]">
            <div class="flex items gap-[4px]">
              <HeaderIconsTimer class="shrink-0 mb-[-3px]" />
              <p class="self-end"><span class="text-[#878787]">Пн-Пт:</span> 9:00 - 20:00</p>
            </div>
            <p>|</p>
            <p><span class="text-[#878787]">Сб:</span> 9:00 - 19:00</p>
          </div>
        </div>

        <!-- contact item -->
        <div class="flex flex-col gap-[6px] contact-item">
          <p class="text-[#878787]">Телефон</p>
          <div class="flex items-end gap-[10px]">
            <div class="flex items gap-[4px]">
              <HeaderIconsCall class="shrink-0 mb-[-3px]" />
              <p class="self-end"><span class="text-[#878787]">8 (383)</span> 25-00-02</p>
            </div>
            <p>|</p>
            <p><span class="text-[#878787]">8 (383)</span> 95-10-49</p>
          </div>
        </div>

        <!-- contact item -->
        <div class="flex flex-col gap-[6px] contact-item">
          <p class="opacity-0">.</p>
          <div class="flex items-end gap-[10px]">
            <div class="flex items gap-[4px]">
              <HeaderIconsWhatsapp class="shrink-0 mb-[-3px]" />
              <p class="self-end">Написать в Whatsapp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UIButton size="sm">Заказать звонок</UIButton>
  </header>
</template>

<style scoped>
.contact-item {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
