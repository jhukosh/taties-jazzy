<template>
  <form @submit.prevent>
    <h1>Get Started</h1>
    <div>
      <label for="name">Nom</label>
      <input v-model="messageForm.name" type="text" placeholder="Nom" id="name" />
    </div>
    <div>
      <label for="firstname">Prénom</label>
      <input v-model="messageForm.firstname" type="text" placeholder="Prénom" id="firstname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="messageForm.email" type="text" placeholder="you@email.com" id="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <input v-model="messageForm.message" type="password" placeholder="Votre message" id="message" />
    </div>
    <button @click="sendMessageForm" class="button">Envoyer</button>
  </form>
</template>
<script>
  import { sendMessageService } from '@/core/services/send-message-service.js'
  export default {
    name: 'ContactFormComponent',
    mixins: [sendMessageService],
    data() {
      return { 
        messageForm: {
          name: '',
          firstname: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      async sendMessageForm() {
        this.sendMessage().then(res => console.log('res', res));
        console.log('form', this.messageForm);
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>

