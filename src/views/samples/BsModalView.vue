<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
//@ts-ignore
const BsModal = defineAsyncComponent(() => import('@/components/BsModal.vue'))

// Modals
const bsmodal1 = ref()
const bsmodal2 = ref()
const bsmodal3 = ref()
const bsmodal4 = ref()
const bsmodal5 = ref()
const bsmodal6 = ref()
const bsmodal7 = ref()
const bsmodal8 = ref()
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
          <li class="breadcrumb-item active">Bs Modal</li>
        </ol>
      </nav>
    </div>

    <h1>samples</h1>

    <h2>BsModal</h2>

    <div class="group">
      <h3>Modal 通常</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal1.open()">open modal</button>
      <BsModal ref="bsmodal1">
        <template #title>Hello, title</template>
        <template #header></template>
        <template #footer></template>
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal 通常 (ボタンクラス変更)</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal2.open()">open modal</button>
      <BsModal ref="bsmodal2" btn-class="btn btn-success">
        <template #title>Hello, title</template>
        <template #header></template>
        <template #footer></template>
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal 通常 (ボタンクラス変更)</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal3.open()">open modal</button>
      <BsModal ref="bsmodal3" btn-class="btn btn-link">
        <template #title>Hello, title</template>
        <template #header></template>
        <template #footer></template>
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal ヘッダcloseボタンなし</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal4.open()">open modal</button>
      <BsModal ref="bsmodal4" :is-close-btn="false">
        <template #title>Hello, title</template>
        <template #header></template>
        <template #footer></template>
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal ヘッダcloseボタンなし, モーダル背景CLOSEなし</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal5.open()">open modal</button>
      <BsModal ref="bsmodal5" :is-close-btn="false" :is-close-modal-back="false">
        <template #title>Hello, title</template>
        <template #header></template>
        <template #footer></template>
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal headerなし</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal6.open()">open modal</button>
      <BsModal ref="bsmodal6">
        <template #close>閉じる</template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal 本文なし</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal7.open()">open modal</button>
      <BsModal ref="bsmodal7">
        <template #title>Hello, title</template>
        <template #close>閉じる</template>
      </BsModal>
    </div>

    <div class="group">
      <h3>Modal フッタなし</h3>
      <button type="button" class="btn btn-primary" @click="bsmodal8.open()">open modal</button>
      <BsModal ref="bsmodal8">
        <template #title>Hello, title</template>
        <template #header></template>
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
        ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。ここに本文を書きます。
      </BsModal>
    </div>
  </div>
</template>

<style scoped lang="scss">
.group {
  margin-top: 30px;
}
</style>
