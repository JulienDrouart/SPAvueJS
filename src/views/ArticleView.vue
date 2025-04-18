<template>
  <div class="about">test</div>
  <h1>Article {{ article.id }}</h1>
</template>

<script setup></script>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const article = route.params.article
alert(article)
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
