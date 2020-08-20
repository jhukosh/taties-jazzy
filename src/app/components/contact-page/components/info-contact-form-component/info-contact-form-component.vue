<template>
    <div id="Info-contact-form-component">
        <div id="Info-contact-header">
            <p>Salut <span class="strawberry-text">les artistes</span> !</p>
            <p>Hé oui, c’est ici que ça se joue!</p>
        </div>

        <br>

        <div id="Info-contact-content">
            <p>Pour tout renseignements concernants:</p>
            <ul>
                <li>Les artistes voulant <span class="strawberry-text">se produire</span> sur la scène des Taties Jazzy;</li>
                <li>Les fous de jazz qui aimeraient - seul ou à plusieurs- <span class="strawberry-text">participer<br> à l’une de nos Master Class;</span></li>
                <li>Les amateurs éclairés qui voudraient <span class="strawberry-text">devenir bénévole de l’Asso;</span></li>
                <li>Les professionnels voulant proposer leurs services pour <span class="strawberry-text">animer une Master Class;</span></li>
            </ul>
            <p>et pour tout autres questions et renseignements;</p>
            <p><span class="bold-text"> vous répondrons avec plaisir !</span></p>
            <p class="line-height">En attendant, Les Taties Jazzy vous souhaite bon vent,</p>
            <p><span class="strawberry-text-big">Et qu'ça swing !</span></p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'InfoContactFormComponent',
    }
</script>

<style lang="scss">
    @import "info-contact-form-component.scss";
</style>