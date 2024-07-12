<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import Webapp4Title from '@/components/Webapp4Title.vue'
import GeneralBreadcrumb from '@/components/GeneralBreadcrumb.vue'

// stores
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const breadcrumbData: any[] = [
  { link_data: { name: 'admin' }, label: '管理' },
  { link_data: null, label: 'ユーザー新樹作成' }
]

// lifecycle
onMounted(() => {
  userStore.newUser()
})

// functions
const toList = () => {
  router.push({ name: 'admin_users', params: {} })
}
const submitForm = async () => {
  await userStore.createUser()
  router.push({ name: 'admin_users', params: {} })
}
</script>

<template>
  <div class="container">
    <webapp4-title :title="'Webapp4 管理画面'" :lead="'Webアプリ ver.4 by Akinori N.'" />
    <GeneralBreadcrumb :links="breadcrumbData" />

    <!-- <header class="mb-3 users_title">
      <img src="@/assets/images/hito-no-wa_heading_001.jpg" class="img-fluid" alt="header" />
      <div class="h1 users_title_text">Users - Create New</div>
    </header> -->

    <div class="main">
      <form class="needs-validation" novalidate @submit.prevent="submitForm">
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="familyname" class="form-label">姓</label>
            <input type="text" class="form-control" id="familyname" v-model="user.familyname" />
          </div>

          <div class="col-sm-6">
            <label for="firstname" class="form-label">名</label>
            <input type="text" class="form-control" id="firstname" v-model="user.firstname" />
          </div>

          <div class="col-sm-6">
            <label for="familynameKana" class="form-label">姓 ふりかな</label>
            <input
              type="text"
              class="form-control"
              id="familynameKana"
              v-model="user.familynameKana"
            />
          </div>

          <div class="col-sm-6">
            <label for="firstnameKana" class="form-label">名 ふりがな</label>
            <input
              type="text"
              class="form-control"
              id="firstnameKana"
              v-model="user.firstnameKana"
            />
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email" />
          </div>
        </div>

        <div class="mt-3">
          <button type="button" class="btn btn-secondary me-2" @click="toList">戻る</button>
          <button type="submit" class="btn btn-primary me-2">作成</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);

  .users_title {
    position: relative;

    &_text {
      position: absolute;
      left: 20px;
      bottom: 0;
      font-weight: bold;
    }
  }

  .main {
    input[type='text'],
    input[type='email'] {
      background-color: var(--bs-secondary-bg);
    }
  }
}
</style>
