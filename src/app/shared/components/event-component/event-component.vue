<template>
    <div class="event">
        <img :src="image" alt="" id="band-image"/>
        <div id="event-infos">
            <p>{{ type }}</p>
            <p>{{ artist }}</p>
            <p>{{ presentation }}</p>
        </div>
    </div>
</template>
<script>
export default {
        name: 'EventComponent',
        data() {
            return {
                type: 'Concert',
                date: '20 septembre 2020',
                artist: 'Christy & Flopy',
                origin: 'New Orléans',
                year: '2009',
                presentation: 'Texte de présentation',
                time: '21h00',
                price: 15,
                image: require('@/assets/photo-band-test.jpg')
            }
        }
    }
</script>
<style lang="scss">
    .event {
        color: #393939;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        #band-image {
            width: 30%;
        }
        #event-infos {
            width: 40%;
        }
    }
</style>
