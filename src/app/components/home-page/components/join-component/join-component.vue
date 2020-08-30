<template>
  <div class="join-component">
    <div class="join-text">
      <p>Rejoignez-nous !</p>
      <h4>Devenir bénévole ?</h4>
      <h4>Proposer une prestation artistique ?</h4>
      <h4>Animer une Master Class ?</h4>
    </div>
    <div class="join-button">
      <button class="strawberry-button strawberry-button-txt">
        <a
          href="mailto:lestatiesjazzy@gmail.com"
          title="Envoyer un email à l'association"
        >ENVOYER UN MAIL</a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "JoinComponent",
};
</script>

<style lang="scss" scoped>
@import "join-component.scss";
</style>
