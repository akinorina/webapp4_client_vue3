<script setup lang="ts">
import Webapp4Title from '@/components/Webapp4Title.vue'
</script>

<template>
  <div class="container main">
    <webapp4-title :title="'Webapp4'" :lead="'Webアプリ ver.4 by Akinori N.'" />

    <div class="py-2 my-3 border rounded">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mx-4 my-0">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'index' }">Index</router-link>
          </li>
        </ol>
      </nav>
    </div>

    <div class="body">
      <div>
        <router-link :to="{ name: 'index' }">Index</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'admin' }">管理画面</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .main {
//   border: 1px red dashed;
// }
</style>
