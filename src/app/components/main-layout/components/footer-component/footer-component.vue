<template>
    <div id="footer">
        <div class="section">
            <div>
                <img src="@/assets/logotj.png" alt="" class="logos">
                <img src="@/assets/logo515copy.png" alt="" class="logos">
            </div>
            <div>
                <ul>
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
    #footer {
        align-items: center;
        background-color: #0e0e0e;
        border-top: 11px solid #fd2232;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 200px;
        width: 100%;

        .section {
            display: flex;
            flex-direction: row;
            width: 30%;
            .logos {
                display: flex;
                flex-direction: column;
                height: 63px;
                object-fit: contain;
                width: 50%;
            }
        }
    }
</style>
