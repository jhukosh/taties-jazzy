<template>
    <div id="Jazz-component">
        <div id="Background">
            <div id="Jazz-top-part">
                <div class="jazz-header">L’amour du jazz</div>
                <div class="jazz-content">
                    <img src="@/assets/circle.png" alt="">
                    <p>L’association vous propose aussi des Master Class, en compagnie de professionnels et passionnés du genre. 
                    Seul ou entre amis, vous pourrez venirs vous essayez l’espace d’un moment sur ces rythmes entraînant et vivre une expérience qui groove!</p>
                </div>
            </div>
            <div class="jazz-image">
                <img src="@/assets/association-page-assets/jazz-image-1.png" alt="">
                <img src="@/assets/association-page-assets/jazz-image-2.png" alt="">
                <img src="@/assets/association-page-assets/jazz-image-3.png" alt="">
            </div>
            <div id="Jazz-bottom-part">
                <div class="jazz-content-justified">
                    Nous tenons régulièrement à jour les thèmes et dates dans la rubriques “Master Class”. 
                    Pour tous renseignements complémentaires, et pour s’inscrire, un formulaire est disponible dans la rubrique “Contact”.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JazzLoveComponent',
    }
</script>

<style lang="scss">
    @import "jazz-love-component.scss";
</style>