<template>
  <div class="about">
    <h1>Liste des articles</h1>
    <ul>
      <template v-if="isLoading"> En cours de chargement... </template>
      <template v-else>
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
      </template>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from 'vue'
import { callApi } from '../composable/callApi.js'
import { useQuery } from '@tanstack/vue-query'

const {
  data: articlesList = [],
  isLoading,
  error,
} = useQuery({
  queryKey: ['articles'],
  queryFn: () => callApi(),
  staleTime: 15_000,
})

// const articlesList = ref([])
// provide('articlesList', articlesList.value)

// onMounted(async () => {
//   articlesList.value = await callApi()
//   console.log(articlesList.value)
//   console.log('articlesList', articlesList.value)
// })
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
