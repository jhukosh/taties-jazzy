<template>
    <div class="main">
        <div>
            <AssociationBanner/>
        </div>
        <p>Association page</p>

        <img src="../../../assets/customSVG/curvy-bg-test.svg" alt="">
        <img src="../../../assets/customSVG/curvy-bg-testHome.svg" alt="">
    </div>
</template>

<script>
    import AssociationBanner from '@/app/components/association-page/components/association-banner-component/association-banner-component.vue'
    export default {
        name: 'Association',
        components: {
            AssociationBanner,
    },
    }
</script>