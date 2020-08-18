<template>
    <div class="event">
        <div class="event-image">
            <img :src="image" alt=""/>
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
export default {
        name: 'EventComponent',
        props: ['parentData'],
        // watch: {
        //     parentData: {
        //             handler: 'methodName',
        //             immediate: true
        //         }
        //     },
        data() {
            return {
                image: require('@/assets/photo-band-test.jpg')
            }
        },
        mounted() {
            console.log(this.parentData);
        }
    }
</script>
<style lang="scss">
    @import "event-component.scss";
</style>
