<template>
    <div id="footer">
        <div class="section">
            <div class="first-section-logos">
                <img src="@/assets/logotj.png" alt="" class="logos">
                <img src="@/assets/logo515copy.png" alt="" class="logos">
            </div>
            <div class="first-section-links">
                <ul class="links-list">
                    <li>
                        <router-link to="/association">Association</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                    <li>
                        <router-link to="/shows">Concerts</router-link>
                    </li>
                    <li>
                        <router-link to="/classes">Master class</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="section"></div>
        <div class="section"></div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>
<style lang="scss">
   @import "footer-component.scss";
</style>
