<template>
  <div class="about">
    <h1>Liste des articles</h1>
    <ul>
      <li v-for="article in articlesList" :key="article.id">
        <RouterLink
          :to="{
            name: 'article',
            params: { articleId: article.id },
          }"
        >
          {{ article.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import { callApi } from '../composable/callApi.js'

const articlesList = ref([])
provide('articlesList', articlesList.value)

onMounted(async () => {
  articlesList.value = await callApi()
  console.log(articlesList.value)
  console.log('articlesList', articlesList.value)
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
