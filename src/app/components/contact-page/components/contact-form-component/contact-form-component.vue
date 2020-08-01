<template>
  <form @submit.prevent>
    <h1>Get Started</h1>
    <div>
      <label for="name">Nom</label>
      <input v-model="sendMessageForm.name" type="text" placeholder="Nom" id="name" />
    </div>
    <div>
      <label for="firstname">Prénom</label>
      <input v-model="sendMessageForm.firstname" type="text" placeholder="Prénom" id="firstname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="sendMessageForm.email" type="text" placeholder="you@email.com" id="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <input v-model="sendMessageForm.message" type="password" placeholder="Votre message" id="message" />
    </div>
    <button @click="sendMessage()" class="button">Envoyer</button>
  </form>
</template>
<script>
  export default {
    name: 'ContactFormComponent',
    data() {
      return { 
        sendMessageForm: {
          name: '',
          firstname: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      sendMessage() {
        console.log('form', this.sendMessageForm)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>

