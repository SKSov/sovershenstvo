<template>
  <section class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumbs-list">
        <li v-for="item in path" :key="item.path" class="breadcrumbs-item">
          <NuxtLink class="breadcrumbs-link" :to="item.path">{{ item.name }}</NuxtLink>
          <span v-if="item.path !== path[path.length - 1].path" class="breadcrumbs-separator"
            >—</span
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  path: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.breadcrumbs-list {
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .breadcrumbs-list {
    gap: 5px;
    margin-top: 10px;
  }
}

.breadcrumbs-separator {
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
}

@media (max-width: 768px) {
  .breadcrumbs-separator {
    font-size: 14px;
  }
}

.breadcrumbs-link {
  color: #878787;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
}

@media (max-width: 768px) {
  .breadcrumbs-link {
    font-size: 14px;
  }
}

.breadcrumbs-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .breadcrumbs-item {
    gap: 5px;
  }
}
</style>
