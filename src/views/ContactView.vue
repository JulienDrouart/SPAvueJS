<template>
  <div class="about">
    <h1>Page de contact</h1>
    <form @submit.prevent>
      <div>
        <label for="name">Nom:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label for="subject">Sujet:</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div>
        <label for="phone">Téléphone:</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
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
