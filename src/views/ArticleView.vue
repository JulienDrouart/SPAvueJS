<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.body }}</p>
  </div>
  <div v-else>
    <p>Chargement de l'article...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { callApi } from '../composable/callApi.js'

const route = useRoute()
const article = ref(null)

onMounted(async () => {
  const allArticles = await callApi()
  article.value = allArticles.find((a) => a.id.toString() === route.params.articleId)
})
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
