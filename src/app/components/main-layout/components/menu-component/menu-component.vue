<template>
    <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/shows">Concerts</router-link> |
        <router-link to="/classes">Master class</router-link> |
        <router-link to="/association">L'association</router-link> |
        <router-link to="/club">Le club</router-link> |
        <router-link to="/contact">Contact</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'MenuComponent',
    }
</script>
