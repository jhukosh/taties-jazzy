<template>
    <div id="footer">
        <div class="section">
            <div class="first-section-logos">
                <GirlsAndBannerLogoComponent />
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
        <div class="section">
            <div class="footer-contact">
                <div class="footer-club-location">
                    <div class="pin-icon"></div>
                    <p>
                        Le Club <br>
                        23 rue Voltaire <br>
                        Fontainebleau <br>
                    </p>
                </div>
                <div class="footer-email-contact">
                    <div class="mail-icon"></div>
                    <p>
                        lestatiesjazzy@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="footer-social-media">
                blou
            </div>
        </div>
    </div>
</template>

<script>
    import GirlsAndBannerLogoComponent from '@/app/shared/components/girls-and-banner-logo-component/girls-and-banner-logo-component.vue'

    export default {
        name: 'FooterComponent',
        components: {
            GirlsAndBannerLogoComponent
        }
    }
</script>
<style lang="scss">
   @import "footer-component.scss";
</style>
