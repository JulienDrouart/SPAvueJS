<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <LeftPart :msg="titleLeft" />
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink :to="{ name: 'articles' }">Articles</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink v-if="!store.user || store.user.username === null" to="/connect"
          >Se connecter</RouterLink
        >
      </nav>

      <template v-if="store.user && store.user.username">
        Connecté en tant que {{ store.user.username }}

        <button v-if="store.user && store.user.username" @click="store.logout">
          Se déconnecter
        </button>
      </template>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LeftPart from './components/LeftPart.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useAuth } from '@/store/auth'

const store = useAuth()

const titleLeft = ref('Accueil')
const connexion = ref('no')

function handleNavClick(event) {
  // Vérifie si le lien cliqué est "Articles"
  if (event.target.textContent.toLowerCase().includes('article')) {
    titleLeft.value = 'un article'
    return
  }
  titleLeft.value = ref(event.target.textContent)
  // Utilisez linkText comme vous le souhaitez
  console.log('RouterLink cliqué:', titleLeft)
}

let navEl = null

onMounted(() => {
  navEl = document.querySelector('nav')
  if (navEl) {
    navEl.addEventListener('click', handleNavClick)
  }
})

onBeforeUnmount(() => {
  if (navEl) {
    navEl.removeEventListener('click', handleNavClick)
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
