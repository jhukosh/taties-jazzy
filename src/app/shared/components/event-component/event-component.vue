<template>
    <div class="event-main">
        <!-- DEV: Filter btn must be here for simplicity -->
        <EventDateComponent />
        <div class="event-info-container">
            <div class="event-image">
                <img :src="image" alt=""/>
            </div>

            <div v-if="parentData.type === 'show'">
                
            </div>
            <div v-else>
                <p>Masterclassevent</p>
            </div>

        </div>






        <div class="event-infos">
            <div v-if="parentData" class="home-event-infos">
                <p class="home-event-type">{{ parentData.type === "show" ? 'Concert' : 'Masterclass' }}</p>
                <h4 class="home-event-date">{{ parentData.date }}</h4>
            </div>
            <hr v-if="parentData" class="home-event-separator">
            <div v-else>
                Faire titre etc. pour show et master classes
            </div>
            <div class="event-secondary-infos">
                <p class="event-secondary-infos-artist">{{ parentData ? parentData.artist : 'artist' }}</p>
                <p class="event-secondary-infos-presentation">{{ parentData ? parentData.presentation : 'présentation' }}</p>
            </div>
            <div class="event-icons">
                <div class="event-icons-item">
                    <div class="clock-icon"></div>
                    <p> {{ parentData ? parentData.time + 'h' : '21h' }}</p>
                </div>
                <div class="event-icons-item">
                    <div class="stamp-icon"></div>
                    <p v-bind:style="parentData.price ? 'margin-left:65px':'margin-left:90px'"> {{ parentData ? parentData.price + '€' : 'Gratuit' }}</p>
                </div>
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
