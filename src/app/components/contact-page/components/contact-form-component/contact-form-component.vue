<template>
  <div id="Contact-form-component"> 
    <p class="please-fill-form">
      Veuillez remplir le formulaire ci-contre, en renseignant vos coordonnées. 
    </p>

    <form id="Contact-form" @submit.prevent>
      <!-- <div>
        <label for="name">Nom</label>
        <input v-model="messageForm.name" type="text" placeholder="Nom" id="name" />
      </div>
      <div>
        <label for="firstname">Prénom</label>
        <input v-model="messageForm.firstname" type="text" placeholder="Prénom" id="firstname" />
      </div> -->
      <div>
        <input id="Email-input" v-model="messageForm.email" type="text" placeholder="Adresse e-mail"/>
      </div>
      <div>
        <input id="Objet-input" v-model="messageForm.objet" type="text" placeholder="Objet"/>
      </div>

      <div>
        <label for="message">Message</label>
        <input v-model="messageForm.message" type="password" placeholder="Votre message" id="message" />
      </div>
      <button @click="sendMessageForm" class="button">Envoyer</button>
    </form>
  </div>
</template>

<script>
  import { sendMessageService } from '@/core/services/send-message-service.js'

  export default {
    name: 'ContactFormComponent',
    mixins: [sendMessageService],
    data() {
      return { 
        messageForm: {
          // name: '',
          // firstname: '',
          email: '',
          objet: '',
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
  @import "contact-form-component.scss";
</style>

