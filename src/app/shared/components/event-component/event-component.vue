<template>
    <div class="event-main">
        <!-- DEV: Filter btn must be here for simplicity -->
        <EventDateComponent />
        <div class="event-info-container">
            <div class="event-image">
                <img :src="image" alt=""/>
            </div>
            <div class="show-info" v-if="parentData.type === 'show'">
                <h5>{{ parentData.title }}</h5>
                <div class="info-icon-container">
                    <!-- DEV : in comms waiting for backdata -->
                    <!-- <div>
                        <img src="../../../../assets/icons/map-pin-black-icon.png" alt="icone de marqueur de carte">
                        {{ parentData.origin }}
                    </div>
                    <div>
                        <img src="../../../../assets/icons/calendar-icon.png" alt="icone de calendrier">
                        {{ parentData.creation }}
                    </div>
                    <div>
                        <img src="../../../../assets/icons/music-note-icon.png" alt="icone de note de musique">
                        {{ parentData.inspiration }}
                    </div>
                    <div>
                        <img src="../../../../assets/icons/mic-icon.png" alt="icone de micro">
                        {{ parentData.tour }}
                    </div> -->
                    
                    <!-- DEV : PLACEHOLDER -->
                    <div>
                        <img src="../../../../assets/icons/map-pin-black-icon.png" alt="icone de marqueur de carte">
                        Réunion
                    </div>
                    <div>
                        <img src="../../../../assets/icons/calendar-icon.png" alt="icone de calendrier">
                        2009
                    </div>
                    <div>
                        <img src="../../../../assets/icons/music-note-icon.png" alt="icone de note de musique">
                        New Orlean
                    </div>
                    <div>
                        <img src="../../../../assets/icons/mic-icon.png" alt="icone de micro">
                        Réunion, Marseille, Toulouse …
                    </div>
                    <!-- DEV : /PLACEHOLDER -->
                </div>
                <div class="show-content">
                    <!-- <p>{{ parentData.text }}</p> -->
                    <p>Ce groupe nous apporte des vibration d’antand avec un style à la New Orleans pur et significatifs. 
                        Avec un chanteur touchant, un saxophoniste épatant et un pianiste pointilleux ce trio à de quoi vous faire vibrer le coeur.</p>
                </div>
                <div class="time-and-price-container">
                    <div class="show-hours">
                        <div class="clock-icon"></div>
                        <p>{{ parentData.heure }}</p>
                    </div>
                    <div class="show-price">
                        <div class="card-icon"></div>
                        <p>{{ parentData.prix }} €</p>
                    </div>
                </div>
                <div>
                    <button class="white-button">
                        <p class="white-button-txt"><a href="#">RÉSERVER MON BILLET</a></p>
                    </button>
                </div>
            </div>



            <div v-else>
                <p>Masterclassevent</p>
            </div>

        </div>
    </div>
</template>

<script>

import EventDateComponent from '@/app/shared/components/event-component/components/event-date-component/event-date-component.vue'
export default {
        name: 'EventComponent',
        props: ['parentData'],
        components: {
            EventDateComponent
        },
        // watch: {
        //     parentData: {
        //             handler: 'methodName',
        //             immediate: true
        //         }
        //     },
        methods: {
            getEvent() {
                console.log('result', this.parentData)
            },
        },
        data() {
            return {
                image: require('@/assets/photo-band-test.jpg')
            }
        },
        mounted() {
            console.log('Mounted :', this.parentData);
        }
    }
</script>

<style lang="scss">
    @import "event-component.scss";
</style>
