<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useImageStore } from '@/stores/image'
import { useRouter } from 'vue-router'
import { defineAsyncComponent, ref } from 'vue'
import Webapp4Title from '@/components/Webapp4Title.vue'
import GeneralBreadcrumb from '@/components/GeneralBreadcrumb.vue'

//@ts-ignore
const BsModal = defineAsyncComponent(() => import('@/components/BsModal.vue'))

// stores
const router = useRouter()
const imageStore = useImageStore()
const { image } = storeToRefs(imageStore)

const breadcrumbData: any[] = [
  { link_data: { name: 'admin' }, label: '管理' },
  { link_data: { name: 'admin_images' }, label: '画像ライブラリ' },
  { link_data: null, label: '画像編集' }
]

// modal
const editModal = ref()

const props = defineProps({
  id: { type: String, required: true }
})
const id = parseInt(props.id) ?? 0

// lifecycle
onMounted(() => {
  imageStore.getImage(id)
})

// functions
const toDetail = () => {
  router.push({ name: 'admin_images_detail', params: {} })
}
const submitForm = async () => {
  await imageStore.updateImage(id)
  router.push({ name: 'admin_images_detail', params: { id: id } })
}
</script>

<template>
  <div class="container main">
    <webapp4-title :title="'Webapp4 管理画面'" :lead="'Webアプリ ver.4 by Akinori N.'" />
    <GeneralBreadcrumb :links="breadcrumbData" />

    <form class="needs-validation" novalidate @submit.stop.prevent="editModal.open()">
      <div class="main">
        <div class="row">
          <div class="col-6">
            <div class="p-3 my-1 border rounded item text-center align-item-center">
              <img :src="'http://localhost:9000' + image.path" class="image" />
            </div>
          </div>
          <div class="col-6">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="familyname" class="form-label">表示名</label>
                <input type="text" class="form-control" id="familyname" v-model="image.name" />
              </div>
            </div>
          </div>
        </div>

        <div class="p-3 mt-3">
          <button type="button" class="btn btn-secondary me-2" @click="toDetail">戻る</button>
          <button type="submit" class="btn btn-primary">更新</button>
        </div>
      </div>
    </form>
  </div>

  <BsModal ref="editModal">
    <template #button>更新</template>
    <template #title>更新してよろしいですか？</template>
    <template #footer>
      <button type="button" class="btn btn-primary" @click="submitForm">更新</button>
    </template>
    <template #close>いいえ</template>
  </BsModal>

  <!-- 
  <BsModal ref="deleteModal">
    <template #title>削除してよろしいですか？</template>
    <template #footer>
      <button type="button" class="btn btn-danger" @click="deleteIt">削除</button>
    </template>
    <template #close>いいえ</template>
  </BsModal>
  -->
</template>

<style scoped lang="scss">
.main {
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
  .image {
    max-width: 100%;
    max-height: 650px;
  }
}
</style>
