<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const status = ref(false)

const open = () => {
  status.value = true
}
const close = () => {
  status.value = false
}

defineExpose({
  open,
  close
})
</script>

<template>
  <Teleport to="body">
    <div class="modal" v-if="status">
      <div class="modal__background">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  &__background {
    width: 100vw;
    height: 100vh;
    background-color: #00000088;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
