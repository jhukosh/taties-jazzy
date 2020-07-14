<template>
    <div class="home-background">
        <img src="@/assets/logotj.png" alt="" class="logos">
        <img src="@/assets/logo515copy.png" alt="" class="logos">
    </div>
</template>
<script>
    export default {
        name: 'HomeBand',
    }
</script>
<style lang="scss">
  .home-background {
    background: url('../../../../../assets/home-band-bg.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: brightness(80%);
    width: 100%;
    height: 450px;

    .logos {
        filter: brightness(100%);
    }
}
</style>