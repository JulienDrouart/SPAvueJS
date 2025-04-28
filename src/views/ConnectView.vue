<template>
  <div class="connect-view">
    <input v-model="pseudo" type="text" placeholder="Entrez votre pseudo" />
    <button @click="seConnecter">Se connecter</button>
  </div>
</template>
<script setup>
function seConnecter() {
  store.authenticate(pseudo)
}
import { ref } from 'vue'
import { useAuth } from '@/store/auth'

const store = useAuth()
const pseudo = ref('')
</script>
