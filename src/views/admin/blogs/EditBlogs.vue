<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import CkeditorBalloon from '@/components/CkeditorBalloon.vue'
import ButtonGeneral from '@/components/ui/ButtonGeneral.vue'
import InputText from '@/components/ui/InputText.vue'
import ModalGeneral from '@/components/ModalGeneral.vue'

// stores
const router = useRouter()
const blogStore = useBlogStore()
const { blog } = storeToRefs(blogStore)

const props = defineProps({
  id: { type: String, required: true }
})
const id = parseInt(props.id) ?? 0

// modal
const modalUpdateConfirm = ref()
const modalUpdateSuccess = ref()
const modalDeleteConfirm = ref()
const modalDeleteSuccess = ref()

// lifecycle
onMounted(async () => {
  await blogStore.getBlog(id)
})

// functions
const toIndex = () => {
  router.push({ name: 'admin_blogs', params: {} })
}
const updateBlog = async () => {
  modalUpdateConfirm.value.close()

  // ブログ更新
  await blogStore.updateBlog(id)

  modalUpdateSuccess.value.open()
  setTimeout(() => {
    modalUpdateSuccess.value.close()
  }, 3000)
}
const deleteBlog = async () => {
  modalDeleteConfirm.value.close()

  // ブログ削除
  await blogStore.deleteBlog(id)

  modalDeleteSuccess.value.open()
  setTimeout(() => {
    modalDeleteSuccess.value.close()
  }, 3000)
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mx-3 my-2">
      <h2 class="my-2 font-bold">Blog</h2>
    </div>

    <div class="border">
      <form class="" novalidate @submit.stop.prevent="modalUpdateConfirm.open()">
        <div class="">
          <div class="flex p-2">
            <label for="username" class="block w-20">ID</label>
            <div class="w-80">{{ blog.id }}</div>
          </div>

          <div class="flex p-2">
            <label for="username" class="block w-20">表題</label>
            <input-text class="w-80" id="username" v-model="blog.subject" />
          </div>

          <div class="p-2">
            <label for="familyname" class="">本文</label>
            <div class="w-full">
              <CkeditorBalloon v-model="blog.body" />
            </div>
          </div>
        </div>
        <div class="p-2">
          <button-general type="button" class="me-2" @click="toIndex">戻る</button-general>
          <button-general type="submit" class="me-2">更新</button-general>
          <button-general type="button" class="" @click="modalDeleteConfirm.open()">
            削除
          </button-general>
        </div>
      </form>
    </div>
  </div>

  <ModalGeneral ref="modalUpdateConfirm">
    <div class="w-64 p-3">
      <div class="text-center">
        <div class="font-bold">画像情報</div>
        <div class="m-3">更新してよろしいですか？</div>
      </div>
      <div class="text-center">
        <button-general class="me-2" @click="updateBlog">はい</button-general>
        <button-general class="" @click="modalUpdateConfirm.close()">いいえ</button-general>
      </div>
    </div>
  </ModalGeneral>

  <ModalGeneral ref="modalUpdateSuccess">
    <div class="w-64 p-3">
      <div class="text-center">
        <div class="font-bold">画像情報</div>
        <div class="m-3">更新しました。</div>
      </div>
    </div>
  </ModalGeneral>

  <ModalGeneral ref="modalDeleteConfirm">
    <div class="w-64 p-3">
      <div class="text-center">
        <div class="font-bold">画像情報</div>
        <div class="m-3">削除してよろしいですか？</div>
      </div>
      <div class="text-center">
        <button-general class="me-2" @click.stop="deleteBlog">はい</button-general>
        <button-general class="" @click.stop="modalDeleteConfirm.close()">いいえ</button-general>
      </div>
    </div>
  </ModalGeneral>

  <ModalGeneral ref="modalDeleteSuccess">
    <div class="w-64 p-3">
      <div class="text-center">
        <div class="font-bold">画像情報</div>
        <div class="m-3">削除しました。</div>
      </div>
    </div>
  </ModalGeneral>
</template>

<style scoped lang="scss"></style>
