<template>
    <div id="groscontainer">
        
        <div id="container1">
            <div class="bebe" v-for="(item, index) in 4" :key="item">
                <img :src="require(`@/assets/club-page-assets/gallery-component/img-left${index+1}.png`)"/>
            </div>
        </div>

        <div id="container2">
            <div class="nana" v-for="(item, index) in 7" :key="item" >
                <img :src="require(`@/assets/club-page-assets/gallery-component/img-right${index+1}.png`)"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Association',
        components: {},
        data: function () {
            return {
                
            }
        }
    }

</script>

<style lang="scss">
    @import "gallery-component.scss";
</style>