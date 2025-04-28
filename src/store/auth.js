import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
  const user = ref(null)
  const authenticate = (pseudo) => {
    user.value = {
      username: pseudo,
    }
  }
  const logout = () => {
    user.value.username = null
  }

  return { user, authenticate, logout }
})
