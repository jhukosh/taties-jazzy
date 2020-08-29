<template>
    <div id="nav">
        <ul class="navList">
            <li class="navItem">
                <router-link to="/">Accueil</router-link>
            </li>
            <li class="navItem">
                <router-link to="/shows">Concerts</router-link>
            </li>
            <li class="navItem">
                <router-link to="/classes">Master class</router-link>
            </li>
            <li>
                <img src="@/assets/logo515.png" alt="Logo Taties Jazzy" class="headerLogo">
            </li>
            <li class="navItem">
                <router-link to="/association">L'association</router-link>
            </li>
            <li class="navItem">
                <router-link to="/club">Le club</router-link>
            </li>
            <li class="navItem">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'HeaderComponent',
    }
</script>
<style lang="scss" scoped>
    .navList {
        align-items: center;
        display: flex;
        flex-direction: row;
        font-family: 'bod72b', sans-serif !important;
        justify-content: space-evenly;
        list-style: none;
        padding-inline-start: 0;

        .headerLogo {
            height: 63px;
            object-fit: contain;
            width: 229px;
        }

        .navItem {
            font-size: 16px;
            text-transform: uppercase;

            a {
                color: #393939;
                letter-spacing: 1.2px;
                text-decoration: none;
            } &::first-letter {
                     font-size: 20px;
                }
            a:hover {
                color: $strawberry;
            }
        }
    }
</style>
