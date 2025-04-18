<template>
  <div class="about">
    <h1>Liste des articles</h1>
    <ul>
      <li v-for="article in articlesList" :key="article.id">
        <RouterLink
          :to="{
            name: 'article',
            params: { articleId: article.id, article: article },
            state: { article },
          }"
        >
          {{ article.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const articlesList = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    if (!res.ok) {
      throw new Error('Network response was not ok')
    }
    articlesList.value = await res.json()
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
  }
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
