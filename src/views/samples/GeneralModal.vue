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
    <div>
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
    </div>
    <div>
      <button @click="openModal">open modal</button>
    </div>

    <general-modal ref="gmodal">
      <div class="gmodal__content">
        <div>modal modal</div>
        <button @click="closeModal">close</button>
      </div>
    </general-modal>
  </main>
</template>

<style lang="scss">
main {
  width: 100vw;
  border: 1px red dashed;
  font-size: 1rem;
}

.gmodal__content {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
