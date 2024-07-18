<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useImageStore } from '@/stores/image'
import Webapp4Title from '@/components/Webapp4Title.vue'
import GeneralBreadcrumb from '@/components/GeneralBreadcrumb.vue'

// stores
const router = useRouter()
const imageStore = useImageStore()

const breadcrumbData: any[] = [
  { link_data: { name: 'admin' }, label: '管理' },
  { link_data: null, label: '画像ライブラリ' }
]

// lifecycle
onMounted(async () => {
  await imageStore.getImages()
})

// functions
const toNew = () => {
  router.push({ name: 'admin_images_new', params: {} })
}
const toDetail = (iid: number) => {
  router.push({ name: 'admin_images_detail', params: { id: iid } })
}
</script>

<template>
  <div class="container main">
    <webapp4-title :title="'Webapp4 管理画面'" :lead="'Webアプリ ver.4 by Akinori N.'" />
    <GeneralBreadcrumb :links="breadcrumbData" />

    <div class="py-2 ope">
      <button type="button" class="btn btn-outline-primary" @click="toNew">
        <i class="bi bi-image display-6"></i>
      </button>
    </div>

    <div class="body">
      <div class="">
        <div class="row g-1 images">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 g-3 d-flex justify-content-center align-items-center frame"
            v-for="(item, index) in imageStore.images"
            :key="index"
          >
            <div class="item">
              <img
                class="image"
                :src="'http://localhost:9000' + item.path"
                :alt="item.name"
                @click="toDetail(item.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);

  // .users_title {
  //   position: relative;

  //   &_text {
  //     position: absolute;
  //     left: 20px;
  //     bottom: 0;
  //   }
  // }

  .ope {
    button {
      background-color: var(--bs-secondary-bg);
    }
  }

  .body {
    .images {
      // border: 1px #00f solid;
      .frame {
        height: 250px;
        // border: 10px #fcfcfc solid;
        padding: 10px;

        .item {
          width: 180px;
          height: 180px;
          // border: 1px #888 dotted;

          display: flex;
          justify-content: center;
          align-items: center;

          .image {
            max-width: 180px;
            max-height: 180px;
          }
        }
      }
    }
  }
}
</style>
