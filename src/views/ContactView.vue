<template>
  <div class="about">
    <h1>Page de contact</h1>
    <form @submit.prevent="sendMsg">
      <div>
        <label for="name">Nom: <span style="color: red">*</span></label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="email">Email: <span style="color: red">*</span></label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="subject">Sujet: <span style="color: red">*</span></label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div>
        <label for="phone">Téléphone: <span style="color: red">*</span></label>
        <input type="number" id="phone" name="phone" required />
      </div>
      <div>
        <label for="message">Message: <span style="color: red">*</span></label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    <p v-if="msg" style="color: black; background-color: #007a50">Le message à bien été envoyé !</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { ref } from 'vue'
const msg = ref(false)
const sendMsg = () => {
  alert('Message envoyé !')
  document.querySelector('form').reset()
  msg.value = true
}
</script>
