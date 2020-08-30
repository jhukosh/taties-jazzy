<template>
  <div id="Contact-form-component">
    <p
      class="please-fill-form"
    >Veuillez remplir le formulaire ci-contre, en renseignant vos coordonnées.</p>

    <form id="Contact-form" @submit.prevent>
      <div>
        <input
          id="Email-input"
          v-model="messageForm.email"
          type="text"
          placeholder="Adresse e-mail"
        />
      </div>
      <div>
        <input id="Objet-input" v-model="messageForm.objet" type="text" placeholder="Objet" />
      </div>

      <div>
        <p class="message-label">Message</p>
        <textarea id="Message-input" v-model="messageForm.message" type="text" />
      </div>
      <button
        id="Contact-submit-btn"
        class="black-button black-button-txt"
        @click="sendMessageForm"
      >ENVOYER</button>
    </form>
  </div>
</template>

<script>
import { sendMessageService } from "@/core/services/send-message-service.js";

export default {
  name: "ContactFormComponent",
  mixins: [sendMessageService],
  data() {
    return {
      messageForm: {
        email: "",
        objet: "",
        message: "",
      },
    };
  },
  methods: {
    async sendMessageForm() {
      this.sendMessage().then((res) => console.log("res", res));
      console.log("form", this.messageForm);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "contact-form-component.scss";
</style>

