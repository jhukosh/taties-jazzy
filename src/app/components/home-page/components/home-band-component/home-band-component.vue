<template>
    <div class="home-background">
        <img src="@/assets/jazzy.png" alt="" id="jazzy"/>
        <img src="@/assets/logotj.png" alt="" class="logos">
        <img src="@/assets/logo515copy.png" alt="" class="logos" id="banner">
        <img src="@/assets/asso.png" alt="" id="asso"/>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;

    .logos {
        height: 50%;
        object-fit: contain;
        width: 50%;
        z-index: 2;
    }

    #banner {
        width: 30%;
        height: auto;
    }

    #jazzy {
        align-self: flex-start;
        margin-bottom: -60px;
        width: 50%;
    }

    #asso {
        align-self: flex-end;
        margin-top: -60px;
        width: 50%;
    }
}
</style>