<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Props
const props = defineProps({
  links: Array
})
</script>

<template>
  <div class="breadcrumb border p-2 rounded">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mx-4 my-0">
        <template v-for="item in props.links" :key="item.label">
          <li class="breadcrumb-item">
            <template v-if="item.link_data === null">
              {{ item.label }}
            </template>
            <template v-else>
              <router-link :to="item.link_data">
                {{ item.label }}
              </router-link>
            </template>
          </li>
        </template>
      </ol>
    </nav>
  </div>
</template>

<style scoped lang="scss"></style>
