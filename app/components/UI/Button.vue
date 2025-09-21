<template>
  <button
    :type="type"
    :class="[
      'inline-flex select-none items-center justify-center gap-2.5 rounded-md font-inter font-medium leading-normal transition-colors',
      textSize,
      variant === 'primary'
        ? ' bg-mainBlue text-white hover:bg-mainBlue/90 active:bg-mainBlue/80'
        : 'px-[35px] border border-mainBlue text-mainBlue hover:bg-mainBlue hover:text-white active:bg-mainBlue/90',
      padding,
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' }, // 'primary' | 'secondary'
  type: { type: String, default: 'button' },
  size: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg'
})

const variant = computed(() => (props.variant === 'secondary' ? 'secondary' : 'primary'))
const padding = computed(() =>
  props.size === 'sm' ? 'p-3.5' : props.size === 'md' ? 'p-5' : 'p-7.5',
)
const textSize = computed(() =>
  props.size === 'sm' ? 'text-[14px]' : props.size === 'md' ? 'text-[18px]' : 'text-[20px]',
)
const type = computed(() =>
  ['button', 'submit', 'reset'].includes(props.type) ? props.type : 'button',
)
</script>
