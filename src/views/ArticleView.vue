<template>
  <div>
    <h1>Article {{ article }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { callApi } from '../composable/callApi.js'

const articlesList = ref([])

onMounted(async () => {
  articlesList.value = await callApi()
})

const route = useRoute()
const articleId = Number(route.params.articleId) // convertir en nombre si besoin

const article = computed(() => articlesList.value.find((a) => a.id === articleId))
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
