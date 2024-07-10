<script setup lang="ts">
import { ref } from 'vue'
import GeneralModal from '@/components/GereralModal.vue'

const gmodal = ref()

const openModal = () => {
  gmodal.value.open()
}
const closeModal = () => {
  gmodal.value.close()
}
</script>

<template>
  <main>
    <div class="index">Index</div>
    <ul>
      <li>
        <router-link :to="{ name: 'index' }">index</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'samples' }">samples</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'samples__generalmodal' }">samples / general-modal</router-link>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
main {
  width: 100vw;
}
</style>
