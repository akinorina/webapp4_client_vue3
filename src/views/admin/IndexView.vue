<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Webapp4Title from '@/components/Webapp4Title.vue'
import GeneralBreadcrumb from '@/components/GeneralBreadcrumb.vue'

const breadcrumbData: any[] = [
  { link_data: null, label: '管理' }
  // { link_data: { name: 'admin' }, label: '管理' },
  // { link_data: { name: 'admin_users' }, label: 'ユーザー' },
  // { link_data: null, label: 'ユーザー情報' }
]
</script>

<template>
  <div class="container main">
    <webapp4-title :title="'Webapp4 管理画面'" :lead="'Webアプリ ver.4 by Akinori N.'" />
    <GeneralBreadcrumb :links="breadcrumbData" />

    <div class="body">
      <div class="index">管理画面 Top page.</div>

      <div>
        <router-link :to="{ name: 'admin_samples' }">サンプルページ</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'admin_users' }">ユーザーアカウント</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
