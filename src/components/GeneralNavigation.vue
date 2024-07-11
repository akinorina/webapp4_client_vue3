<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { RouterLink, useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push({ name: 'index' })
}
</script>

<template>
  <div class="navigations">
    <div class="navigations__left">
      <router-link :to="{ name: 'index' }">
        <div class="fs-4">Webapp4</div>
      </router-link>
    </div>

    <div class="navigations__right">
      <template v-if="authStore.isAuthenticated">
        <div>{{ authStore.name }}</div>
        <div>
          <a href="#" @click="logout">logout</a>
        </div>
      </template>
      <template v-else>
        <router-link :to="{ name: 'admin_login' }">login</router-link>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px red dotted;
  border-radius: 30px;
  padding: 5px 20px;
  box-shadow: 3px 3px 5px #ccc;

  background-color: #fff;

  &__left,
  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      margin: 5px;
    }
  }
}
</style>
