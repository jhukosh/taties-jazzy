<template>
  <div id="Staff-component">
    <div id="Staff-picture">
      <img src="@/assets/association-page-assets/association-staff.png" alt>
    </div>

    <div class="bass-background-container">
      <img class="bass-background" src="@/assets/bass.png" alt>
    </div>

    <div
      class="staff-content-container"
      :class="staff1Display ? 'order-title-and-text' : 'reverse-title-and-text'"
    >
      <div class="staff left-column">
        <div class="staff-name-container" :class="staff1Display ? '' : 'staff-undisplayed'">
          <h5 class="staff-name">Paul Ragon</h5>
          <div class="subtitle">Secrétaire</div>
        </div>
        <p class="staff-content" :class="staff2Display ? '' : 'staff-undisplayed'">
          “ Salut ! Moi, c’est Seb. Mon métier, c’est développeur Front-web, -je sais, ça à l’air un peu technique comme ça-, et je suis aussi guitariste dans le groupe Owlwood. Vous l’aurez compris, ma vie tourne pas mal autour de la musique, Et c’est justement cette passion -et surtout- l’envie de la partager qui m’a fait accepter d’emblée l’aventure des Taties Jazzies.
          <br>
          <br>J’ai trouvé l’idée des filles géniale, enfin un lieu où profiter d’une bonne ambiance et d’une super musique en live. Alors… J’ai dit oui, et nous voilà partis!”
        </p>
      </div>

      <div class="staff right-column">
        <p class="staff-content" :class="staff1Display ? '' : 'staff-undisplayed'">
          “Salut tous l’monde! Moi, c’est Paul. Au travail, je suis Directeur de Production à mon compte dans l’imprimerie. Mais j’suis surtout un passionné dans l’âme. Et je m'intéresse à de nombreux sujets, que ce soit la nature -les documentaires animaliers,-, en passant par le sport -j’ai pratiqué le water-polo pendant pas mal d’année!- et le cinéma, avec les grands classiques français…`
          <br>
          <br>Mais ce que j’aime par dessus tout, c’est la musique. Rien de tel, quand ont est pas dans un bon jour, que de partir en promenade, un air de jazz dans les oreils - ou dans l’autoradio-, et de laisser s’opérer la magie des rythmes chaloupés et entrainants, ou encore les mélodies langoureuses et sensibles, et tout ce swing qui fait le Jazz… Enfin, je m’égare! Tout ça pour dire que l’idée de Leah et Loreleï de créer les Taties Jazzies m'a littéralement séduit: Un endroit pour venir écouter des artistes de Jazz en live tout en passant une soirée entre amis. Je suis sûr que ça va cartonner!”
        </p>
        <div class="staff-name-container" :class="staff2Display ? '' : 'staff-undisplayed'">
          <h5 class="staff-name small">Sébastien Pansini</h5>
          <div class="subtitle">Trésorier</div>
        </div>
      </div>
    </div>

    <div class="change-staff-displayed-btn">
      <p @click="changeStaffDisplayed">
        <img src="@/assets/arrow.png" alt id="Left-arrow">
        {{ staff1Display ? '1/2' : '2/2' }}
        <img src="@/assets/arrow.png" alt>
      </p>
    </div>

    <div class="bass-background-container-placeholder">
      <img class="bass-background-placeholder" src="@/assets/bass.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffComponent",
  data: function() {
    return {
      staff1Display: true,
      staff2Display: false
    };
  },
  methods: {
    changeStaffDisplayed: function() {
      this.staff1Display = !this.staff1Display;
      this.staff2Display = !this.staff2Display;
    }
  }
};
</script>

<style lang="scss">
@import "staff-component.scss";
</style>
