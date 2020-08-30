<template>
  <div id="Event-infos-component">
    <h5>{{ event.artist }}</h5>
    <div class="info-icon-container">
      <!-- TODO Create proper data model and replace by data -->
      <div>
        <img src="@/assets/icons/map-pin-black-icon.png" alt="icone de marqueur de carte" />
        {{ event.origin }}
      </div>
      <div>
        <img src="@/assets/icons/calendar-icon.png" alt="icone de calendrier" />
        {{ event.creation }}
      </div>
      <div>
        <img src="@/assets/icons/music-note-icon.png" alt="icone de note de musique" />
        {{ event.inspiration }}
      </div>
      <!--
      <div>
        <img src="@/assets/icons/mic-icon.png" alt="icone de micro" />
        Réunion, Marseille, Toulouse …
      </div>
       -->
    </div>
    <div class="show-content">
      <p>{{ event.presentation }}</p>
    </div>
    <div class="event-infos-time-and-price-container">
      <div class="show-hours">
        <div class="clock-icon"></div>
        <p>{{ event.time }}</p>
      </div>
      <div class="show-price">
        <div class="card-icon"></div>
        <p>{{ event.price }} €</p>
      </div>
    </div>
    <div>
      <button class="white-button white-button-txt">
        RÉSERVER MON BILLET
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventInfosComponent',
  props: ['event']
}
</script>
<style lang="scss" scoped>
@import 'event-infos-component.scss';
</style>