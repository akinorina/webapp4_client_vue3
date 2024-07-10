<script setup lang="ts"></script>

<template>
  <main>
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
        </ol>
      </nav>
    </div>

    <div class="px-4 py-2 my-0">
      <div class="index">Index</div>
      <ul>
        <li>
          <router-link :to="{ name: 'samples__generalmodal' }">general-modal</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'samples__bsmodal' }">bs-modal</router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: calc(100vw - 20px);
  padding: 10px;
}
</style>
