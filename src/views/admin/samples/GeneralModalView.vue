<script setup lang="ts">
import { ref } from 'vue'
import GeneralModal from '@/components/GeneralModal.vue'

const gmodal = ref()
</script>

<template>
  <div class="container main">
    <div class="px-4 py-2 my-3 text-center border rounded">
      <h1 class="display-5 fw-bold text-body-emphasis">Webapp4 管理画面</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Webアプリ ver.4 by Akinori N.</p>
      </div>
    </div>

    <div class="py-2 my-3 border rounded">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mx-4 my-0">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'admin' }">管理画面 Top</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'admin_samples' }">サンプルs</router-link>
          </li>
          <li class="breadcrumb-item active">GeneralModal</li>
        </ol>
      </nav>
    </div>

    <div class="body">
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
