<template>
  <div id="Event-infos-component">
    <h5>{{ type === 'show' ? event.artist: event.title }}</h5>
    <div class="info-icon-container" v-if="type === 'show'">
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
    <div v-else-if="type === 'masterclass'">
      <p class="event-infos-masterclass-artist">avec {{ event.artist }}</p>
    </div>
    <div class="show-content">
      <p>{{ event.presentation }}</p>
    </div>
    <div 
    class="event-infos-time-and-price-container"
    :style="type === 'masterclass' && !fromHome ? 'flex-direction: column': 'flex-direction: row'"
    >
      <div class="show-hours">
        <div class="clock-icon"></div>
        <p v-if="type === 'show'">{{ event.time }}h</p>
        <p v-else-if="type === 'masterclass'">{{ event.startTime }}h / {{ event.endTime }}h</p>
      </div>
      <div class="show-price">
        <div class="card-icon"></div>
        <p>{{ event.price }} €</p>
      </div>
    </div>
    <div v-if="type === 'show'" :class="fromHome ? 'home-margin-top-btn ': 'events-pages-margin-top-btn'">
      <button class="white-button white-button-txt">
        RÉSERVER MON BILLET
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventInfosComponent',
  props: ['event', 'type', 'fromHome']
}
</script>
<style lang="scss" scoped>
@import 'event-infos-component.scss';
</style>