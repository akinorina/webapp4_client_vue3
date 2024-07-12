<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'
import Webapp4Title from '@/components/Webapp4Title.vue'
import GeneralBreadcrumb from '@/components/GeneralBreadcrumb.vue'

//@ts-ignore
const BsModal = defineAsyncComponent(() => import('@/components/BsModal.vue'))

// stores
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const props = defineProps({
  id: { type: String, required: true }
})
const id = parseInt(props.id) ?? 0

const breadcrumbData: any[] = [
  { link_data: { name: 'admin' }, label: '管理' },
  { link_data: null, label: 'ユーザー' },
  { link_data: null, label: '編集' }
]

// modal
const editModal = ref()

// lifecycle
onMounted(() => {
  userStore.getUser(id)
})

// functions
const toDetail = () => {
  router.push({ name: 'admin_users_detail', params: { id: id } })
}
const submitForm = async () => {
  await userStore.updateUser(id)
  router.push({ name: 'admin_users_detail', params: { id: id } })
}
</script>

<template>
  <div class="container">
    <webapp4-title :title="'Webapp4 管理画面'" :lead="'Webアプリ ver.4 by Akinori N.'" />
    <GeneralBreadcrumb :links="breadcrumbData" />

    <div class="main">
      <form class="needs-validation" novalidate @submit.stop.prevent="editModal.open()">
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
          <button type="button" class="btn btn-secondary me-2" @click="toDetail">戻る</button>
          <button type="submit" class="btn btn-primary">更新</button>
        </div>
      </form>
    </div>
  </div>

  <BsModal ref="editModal">
    <template #button>更新</template>
    <template #title>更新してよろしいですか？</template>
    <template #footer>
      <button type="button" class="btn btn-primary" @click="submitForm">更新</button>
    </template>
    <template #close>いいえ</template>
  </BsModal>
</template>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);

  .main {
    input[type='text'],
    input[type='email'] {
      background-color: var(--bs-secondary-bg);
    }
  }
}
</style>
