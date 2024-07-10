<script setup lang="ts">
import { ref } from 'vue'
import GeneralModal from '@/components/GeneralModal.vue'

const gmodal = ref()
</script>

<template>
  <div class="container">
    <div class="px-4 py-2 my-0 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">Samples</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">サンプルコードのページです。</p>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'samples' }">Samples</router-link>
          </li>
          <li class="breadcrumb-item active">General Modal</li>
        </ol>
      </nav>
    </div>

    <button type="button" class="btn btn-primary" @click="gmodal.open()">open modal</button>
    <general-modal ref="gmodal" :is-close-modal-back="false">
      <div class="generalmodal__content">
        <div>
          ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
          ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        </div>
        <button class="btn btn-primary" @click="gmodal.close()">close</button>
      </div>
    </general-modal>
  </div>
</template>

<style scoped lang="scss">
.generalmodal__content {
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
}
</style>
