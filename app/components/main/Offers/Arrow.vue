<template>
  <div class="circle">
    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
      <circle
        cx="35.5"
        cy="35.5"
        r="34.5"
        fill="white"
        fill-opacity="0.2"
        stroke="white"
        stroke-width="2"
      />
    </svg>
    <svg
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M0.782151 19.5363C0.391627 19.9268 0.391627 20.56 0.782151 20.9505C1.17268 21.341 1.80584 21.341 2.19636 20.9505L1.48926 20.2434L0.782151 19.5363ZM21.244 1.48869C21.244 0.936406 20.7963 0.488691 20.244 0.48869L11.244 0.488691C10.6917 0.488691 10.244 0.936406 10.244 1.48869C10.244 2.04098 10.6917 2.48869 11.244 2.48869L19.244 2.48869L19.244 10.4887C19.244 11.041 19.6917 11.4887 20.244 11.4887C20.7963 11.4887 21.244 11.041 21.244 10.4887L21.244 1.48869ZM1.48926 20.2434L2.19636 20.9505L20.9511 2.1958L20.244 1.48869L19.5369 0.781584L0.782151 19.5363L1.48926 20.2434Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style scoped>
.circle {
  position: relative;
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
