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
        <li v-if="hasNextPage">
          <button @click="fetchNextPage" :disabled="isFetching">
            {{ isFetching ? 'Chargement...' : 'Charger plus' }}
          </button>
        </li></template
      >
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, provide, effect, computed } from 'vue'
import { callApi } from '../composable/callApi.js'
import { useInfiniteQuery, useQuery } from '@tanstack/vue-query'

const { data, isLoading, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['articlesList'],
  initialPageParam: 1,
  queryFn: ({ pageParam }) => callApi({ id: null, page: pageParam }),
  getNextPageParam: (lastPage, pages) => {
    const hasMore = lastPage.length === 6
    return hasMore ? pages.length + 1 : undefined
  },
})
effect(() => {
  console.log('data', data.value)
})
const articlesList = computed(() => {
  return data.value?.pages.flat() ?? []
})

// const {
//   data: articlesList = [],
//   isLoading,
//   error,
// } = useQuery({
//   queryKey: ['articles'],
//   queryFn: () => callApi({ id: null, page: null }),
//   staleTime: 15_000,
// })

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
