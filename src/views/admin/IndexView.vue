<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
        </ol>
      </nav>
    </div>

    <div class="body">
      <div class="index">管理画面 Top page.</div>

      <div>
        <router-link :to="{ name: 'admin_samples' }">サンプルページ</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
