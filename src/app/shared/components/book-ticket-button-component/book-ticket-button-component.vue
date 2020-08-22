<template>
    <div id="Book-ticket-button-component">
        <div id="Ticket-alarm-container">
            <p class="ticket-text">Vous ne voulez pas loupé votre artiste préféré?</p>
            <p class="ticket-sub">Avec <span>Weezevent</span> réservez vos billets en un clique !</p>
        </div>
        <button class="black-button"><a href="#" class="black-button-txt">RÉSERVER MON BILLET</a></button>
    </div>
</template>

<script>
    export default {
        name: 'BookTicketButtonComponent',
    }
</script>

<style lang="scss">
    @import "book-ticket-button-component.scss";
</style>