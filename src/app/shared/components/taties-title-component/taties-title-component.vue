<template>
    <div class="taties-title-main">
        <div class="black-horizontal-separator"></div>
        <div class="title-container">
            <h4 class="taties-subtitle">{{ subtitle }}</h4>
            <h2 class="taties-title">
                {{ title }}
                <span v-if="!this.undisplayDot" class="red-dot">•</span>
            </h2>
        </div>
        <div class="black-horizontal-separator end-separator"></div>
    </div>
</template>

<script>
    export default {
        name: 'TatiesTitleComponent',
        props: ['subtitle','title', 'undisplayDot']
    }
</script>

<style lang="scss">
    @import "taties-title-component.scss";
</style>