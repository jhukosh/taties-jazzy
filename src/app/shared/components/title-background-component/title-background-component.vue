<template>
    <div id="Title-background-component">
        <div id="Title-background-banner">
            <div id="Title-banner-image" :style="{'background-image': 'url(' + colorStyle + ')'}">
                <h1 id="Main-page-title">{{ background_title }}</h1>
            </div>
        </div>
        <div class="colored-separator"></div>
    </div>
</template>

<script>
    export default {
        name: 'TitleBackgroundComponent',
        props: ['background_image','background_title'],
        computed: {
            colorStyle() {
                return require(`../../../../assets/${this.background_image}`)
            }
        }
    }
</script>

<style lang="scss">
    @import "title-background-component.scss";
</style>