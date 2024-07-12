<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  lead: { type: String, default: '' }
})
</script>

<template>
  <div>
    <div class="px-4 py-2 my-3 text-center border rounded">
      <h1 class="display-5 fw-bold text-body-emphasis">{{ props.title }}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{{ props.lead }}</p>
      </div>
    </div>
  </div>
</template>
